<script lang="ts">
  import { onMount } from 'svelte';
  import { localeStore } from './i18n/index.svelte';
  import { ui } from './state/uiState.svelte';
  import Header from './lib/components/Header.svelte';
  import GoalCard from './lib/components/GoalCard.svelte';
  import CodeBlock from './lib/components/CodeBlock.svelte';
  import Controls from './lib/components/Controls.svelte';
  import HintCard from './lib/components/HintCard.svelte';
  import ComicPreview from './lib/components/ComicPreview.svelte';
  import SuccessModal from './lib/components/SuccessModal.svelte';
  import HelpModal from './lib/components/HelpModal.svelte';

  const HELP_SEEN_KEY = 'cgs_seen_help';

  onMount(() => {
    if (!localStorage.getItem(HELP_SEEN_KEY)) {
      ui.helpModalOpen = true;
      localStorage.setItem(HELP_SEEN_KEY, '1');
    }
  });

  let t = $derived(localeStore.t);
</script>

<Header />

<main>
  <section class="panel-frame">
    <h2>{t.ui.workspaceHeading}</h2>
    <GoalCard />
    <CodeBlock />
    <Controls />
    <HintCard />
  </section>

  <section class="panel-frame">
    <h2>{t.ui.previewHeading}</h2>
    <ComicPreview />
  </section>
</main>

<footer>{t.ui.footerText}</footer>

<SuccessModal />
<HelpModal />
