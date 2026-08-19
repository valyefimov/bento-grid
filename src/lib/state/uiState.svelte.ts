type FeedbackKind = 'ok' | 'err' | null;

class UiState {
  successModalOpen = $state(false);
  successCode = $state('');
  certificateModalOpen = $state(false);
  helpModalOpen = $state(false);
  feedbackKind = $state<FeedbackKind>(null);
  feedbackText = $state('');
  shakeKey = $state(0);
  showGridLines = $state(false);
  negLine1Active = $state(false);
  negLine2Active = $state(false);

  resetFeedback(): void {
    this.feedbackKind = null;
    this.feedbackText = '';
  }

  showSuccess(text: string): void {
    this.feedbackKind = 'ok';
    this.feedbackText = text;
  }

  showError(text: string): void {
    this.feedbackKind = 'err';
    this.feedbackText = text;
    this.shakeKey++;
  }

  resetToggles(): void {
    this.negLine1Active = false;
    this.negLine2Active = false;
  }
}

export const ui = new UiState();
