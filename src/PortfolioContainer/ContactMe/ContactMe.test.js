import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactMe from "./ContactMe";

const mockSendForm = jest.fn();

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  sendForm: (...args) => mockSendForm(...args),
}));

jest.mock("react-toastify", () => {
  const actual = jest.requireActual("react-toastify");
  return {
    ...actual,
    toast: {
      success: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
    },
  };
});

jest.mock("react-spinners", () => ({
  ClockLoader: () => <div data-testid="clock-loader" />,
}));

const { toast } = jest.requireMock("react-toastify");

const emailConfig = {
  serviceId: "service",
  templateId: "template",
  publickey: "public",
};

function fillForm() {
  fireEvent.change(screen.getByLabelText(/^name$/i), {
    target: { value: "Rajat" },
  });
  fireEvent.change(screen.getByLabelText(/^email$/i), {
    target: { value: "rajat@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/^message$/i), {
    target: { value: "Hello" },
  });
}

function submitForm() {
  fireEvent.submit(screen.getByRole("form", { name: /contact form/i }));
}

describe("ContactMe", () => {
  beforeEach(() => {
    mockSendForm.mockReset();
    toast.success.mockReset();
    toast.error.mockReset();
  });

  it("caps field length", () => {
    render(<ContactMe emailConfig={emailConfig} />);
    expect(screen.getByLabelText(/^name$/i)).toHaveAttribute("maxLength", "100");
    expect(screen.getByLabelText(/^email$/i)).toHaveAttribute("maxLength", "254");
    expect(screen.getByLabelText(/^message$/i)).toHaveAttribute(
      "maxLength",
      "2000"
    );
  });

  it("does not call EmailJS when the form is not configured", async () => {
    render(<ContactMe emailConfig={{}} />);
    fillForm();
    submitForm();
    expect(mockSendForm).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });

  it("swallows honeypot submissions without calling EmailJS", async () => {
    render(<ContactMe emailConfig={emailConfig} />);
    fillForm();
    fireEvent.change(screen.getByLabelText(/company website/i, { hidden: true }), {
      target: { value: "https://spam.test" },
    });
    submitForm();
    expect(mockSendForm).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });
  });

  it("sends the form and resets on success", async () => {
    mockSendForm.mockResolvedValue({ text: "OK" });
    render(<ContactMe emailConfig={emailConfig} />);
    fillForm();
    submitForm();
    await waitFor(() => {
      expect(mockSendForm).toHaveBeenCalledWith(
        "service",
        "template",
        expect.anything(),
        "public"
      );
    });
    expect(toast.success).toHaveBeenCalled();
    expect(screen.getByLabelText(/^name$/i)).toHaveValue("");
  });

  it("shows an error toast when EmailJS fails", async () => {
    mockSendForm.mockRejectedValue(new Error("network"));
    render(<ContactMe emailConfig={emailConfig} />);
    fillForm();
    submitForm();
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
    expect(screen.getByRole("button", { name: /submit/i })).not.toBeDisabled();
  });

  it("shows an error toast when EmailJS returns a non-OK result", async () => {
    mockSendForm.mockResolvedValue({ text: "FAIL" });
    render(<ContactMe emailConfig={emailConfig} />);
    fillForm();
    submitForm();
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
