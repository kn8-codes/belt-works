<script>
  let { item } = $props();
  const tone = $derived(item.statusTone ?? '');
</script>

<article class="card">
  <div class="meta">{item.type}</div>
  <h3>{item.name}</h3>
  <p>{item.summary}</p>
  <p><span class={`status ${tone}`}>{item.status}</span></p>
  {#if item.notes}
    <p>{item.notes}</p>
  {/if}
  <div class="actions">
    {#if item.href}
      <a class="button secondary" href={item.href}>open</a>
    {/if}
    {#if item.github}
      <a class="button secondary" href={item.github} target="_blank" rel="noreferrer">github</a>
    {/if}
  </div>
</article>
