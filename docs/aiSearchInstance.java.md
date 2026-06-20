# `aiSearchInstance` Submodule <a name="`aiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.aiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchInstance <a name="AiSearchInstance" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstance;

AiSearchInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .id(java.lang.String)
//  .aiGatewayId(java.lang.String)
//  .aisearchModel(java.lang.String)
//  .cache(java.lang.Boolean|IResolvable)
//  .cacheThreshold(java.lang.String)
//  .cacheTtl(java.lang.Number)
//  .chunk(java.lang.Boolean|IResolvable)
//  .chunkOverlap(java.lang.Number)
//  .chunkSize(java.lang.Number)
//  .customMetadata(IResolvable|java.util.List<AiSearchInstanceCustomMetadata>)
//  .embeddingModel(java.lang.String)
//  .fusionMethod(java.lang.String)
//  .hybridSearchEnabled(java.lang.Boolean|IResolvable)
//  .indexingOptions(AiSearchInstanceIndexingOptions)
//  .indexMethod(AiSearchInstanceIndexMethod)
//  .maxNumResults(java.lang.Number)
//  .metadata(AiSearchInstanceMetadata)
//  .paused(java.lang.Boolean|IResolvable)
//  .publicEndpointParams(AiSearchInstancePublicEndpointParams)
//  .reranking(java.lang.Boolean|IResolvable)
//  .rerankingModel(java.lang.String)
//  .retrievalOptions(AiSearchInstanceRetrievalOptions)
//  .rewriteModel(java.lang.String)
//  .rewriteQuery(java.lang.Boolean|IResolvable)
//  .scoreThreshold(java.lang.Number)
//  .source(java.lang.String)
//  .sourceParams(AiSearchInstanceSourceParams)
//  .summarization(java.lang.Boolean|IResolvable)
//  .summarizationModel(java.lang.String)
//  .syncInterval(java.lang.Number)
//  .systemPromptAisearch(java.lang.String)
//  .systemPromptIndexSummarization(java.lang.String)
//  .systemPromptRewriteQuery(java.lang.String)
//  .tokenId(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aiGatewayId">aiGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aisearchModel">aisearchModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cache">cache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheThreshold">cacheThreshold</a></code> | <code>java.lang.String</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | Cache entry TTL in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunk">chunk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkOverlap">chunkOverlap</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.customMetadata">customMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.embeddingModel">embeddingModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.fusionMethod">fusionMethod</a></code> | <code>java.lang.String</code> | Available values: "max", "rrf". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.hybridSearchEnabled">hybridSearchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated — use index_method instead. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.indexingOptions">indexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.indexMethod">indexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | Controls which storage backends are used during indexing. Defaults to vector-only. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.maxNumResults">maxNumResults</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.publicEndpointParams">publicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.reranking">reranking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rerankingModel">rerankingModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.retrievalOptions">retrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteModel">rewriteModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteQuery">rewriteQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scoreThreshold">scoreThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.sourceParams">sourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarization">summarization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.syncInterval">syncInterval</a></code> | <code>java.lang.Number</code> | Interval between automatic syncs, in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptAisearch">systemPromptAisearch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptIndexSummarization">systemPromptIndexSummarization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptRewriteQuery">systemPromptRewriteQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.tokenId">tokenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Available values: "r2", "web-crawler". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aiGatewayId`<sup>Optional</sup> <a name="aiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aiGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `aisearchModel`<sup>Optional</sup> <a name="aisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aisearchModel"></a>

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cache"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `cacheThreshold`<sup>Optional</sup> <a name="cacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheThreshold"></a>

- *Type:* java.lang.String

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `cacheTtl`<sup>Optional</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheTtl"></a>

- *Type:* java.lang.Number

Cache entry TTL in seconds.

Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
Available values: 600, 1800, 3600, 7200, 21600, 43200, 86400, 172800, 259200, 518400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_ttl AiSearchInstance#cache_ttl}

---

##### `chunk`<sup>Optional</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunk"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `chunkOverlap`<sup>Optional</sup> <a name="chunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkOverlap"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.customMetadata"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `embeddingModel`<sup>Optional</sup> <a name="embeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.embeddingModel"></a>

- *Type:* java.lang.String

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `fusionMethod`<sup>Optional</sup> <a name="fusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.fusionMethod"></a>

- *Type:* java.lang.String

Available values: "max", "rrf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}

---

##### `hybridSearchEnabled`<sup>Optional</sup> <a name="hybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.hybridSearchEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated — use index_method instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}

---

##### `indexingOptions`<sup>Optional</sup> <a name="indexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.indexingOptions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}.

---

##### `indexMethod`<sup>Optional</sup> <a name="indexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.indexMethod"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

Controls which storage backends are used during indexing. Defaults to vector-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}

---

##### `maxNumResults`<sup>Optional</sup> <a name="maxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.maxNumResults"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `publicEndpointParams`<sup>Optional</sup> <a name="publicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.publicEndpointParams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `reranking`<sup>Optional</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.reranking"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `rerankingModel`<sup>Optional</sup> <a name="rerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rerankingModel"></a>

- *Type:* java.lang.String

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `retrievalOptions`<sup>Optional</sup> <a name="retrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.retrievalOptions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}.

---

##### `rewriteModel`<sup>Optional</sup> <a name="rewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteModel"></a>

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `rewriteQuery`<sup>Optional</sup> <a name="rewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteQuery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `scoreThreshold`<sup>Optional</sup> <a name="scoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scoreThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `sourceParams`<sup>Optional</sup> <a name="sourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.sourceParams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarization"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarizationModel"></a>

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `syncInterval`<sup>Optional</sup> <a name="syncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.syncInterval"></a>

- *Type:* java.lang.Number

Interval between automatic syncs, in seconds.

Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}

---

##### `systemPromptAisearch`<sup>Optional</sup> <a name="systemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptAisearch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `systemPromptIndexSummarization`<sup>Optional</sup> <a name="systemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptIndexSummarization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `systemPromptRewriteQuery`<sup>Optional</sup> <a name="systemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptRewriteQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `tokenId`<sup>Optional</sup> <a name="tokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.tokenId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata">putCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions">putIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod">putIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams">putPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions">putRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams">putSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId">resetAiGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel">resetAisearchModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold">resetCacheThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheTtl">resetCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk">resetChunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap">resetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel">resetEmbeddingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetFusionMethod">resetFusionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled">resetHybridSearchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexingOptions">resetIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexMethod">resetIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults">resetMaxNumResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams">resetPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking">resetReranking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel">resetRerankingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRetrievalOptions">resetRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel">resetRewriteModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery">resetRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold">resetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams">resetSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization">resetSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel">resetSummarizationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSyncInterval">resetSyncInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch">resetSystemPromptAisearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization">resetSystemPromptIndexSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery">resetSystemPromptRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId">resetTokenId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetadata` <a name="putCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata"></a>

```java
public void putCustomMetadata(IResolvable|java.util.List<AiSearchInstanceCustomMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>>

---

##### `putIndexingOptions` <a name="putIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions"></a>

```java
public void putIndexingOptions(AiSearchInstanceIndexingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `putIndexMethod` <a name="putIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod"></a>

```java
public void putIndexMethod(AiSearchInstanceIndexMethod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata"></a>

```java
public void putMetadata(AiSearchInstanceMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `putPublicEndpointParams` <a name="putPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams"></a>

```java
public void putPublicEndpointParams(AiSearchInstancePublicEndpointParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `putRetrievalOptions` <a name="putRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions"></a>

```java
public void putRetrievalOptions(AiSearchInstanceRetrievalOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `putSourceParams` <a name="putSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams"></a>

```java
public void putSourceParams(AiSearchInstanceSourceParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `resetAiGatewayId` <a name="resetAiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId"></a>

```java
public void resetAiGatewayId()
```

##### `resetAisearchModel` <a name="resetAisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel"></a>

```java
public void resetAisearchModel()
```

##### `resetCache` <a name="resetCache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache"></a>

```java
public void resetCache()
```

##### `resetCacheThreshold` <a name="resetCacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold"></a>

```java
public void resetCacheThreshold()
```

##### `resetCacheTtl` <a name="resetCacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheTtl"></a>

```java
public void resetCacheTtl()
```

##### `resetChunk` <a name="resetChunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk"></a>

```java
public void resetChunk()
```

##### `resetChunkOverlap` <a name="resetChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap"></a>

```java
public void resetChunkOverlap()
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize"></a>

```java
public void resetChunkSize()
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetEmbeddingModel` <a name="resetEmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel"></a>

```java
public void resetEmbeddingModel()
```

##### `resetFusionMethod` <a name="resetFusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetFusionMethod"></a>

```java
public void resetFusionMethod()
```

##### `resetHybridSearchEnabled` <a name="resetHybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled"></a>

```java
public void resetHybridSearchEnabled()
```

##### `resetIndexingOptions` <a name="resetIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexingOptions"></a>

```java
public void resetIndexingOptions()
```

##### `resetIndexMethod` <a name="resetIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexMethod"></a>

```java
public void resetIndexMethod()
```

##### `resetMaxNumResults` <a name="resetMaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults"></a>

```java
public void resetMaxNumResults()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetPublicEndpointParams` <a name="resetPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams"></a>

```java
public void resetPublicEndpointParams()
```

##### `resetReranking` <a name="resetReranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking"></a>

```java
public void resetReranking()
```

##### `resetRerankingModel` <a name="resetRerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel"></a>

```java
public void resetRerankingModel()
```

##### `resetRetrievalOptions` <a name="resetRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRetrievalOptions"></a>

```java
public void resetRetrievalOptions()
```

##### `resetRewriteModel` <a name="resetRewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel"></a>

```java
public void resetRewriteModel()
```

##### `resetRewriteQuery` <a name="resetRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery"></a>

```java
public void resetRewriteQuery()
```

##### `resetScoreThreshold` <a name="resetScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold"></a>

```java
public void resetScoreThreshold()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceParams` <a name="resetSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams"></a>

```java
public void resetSourceParams()
```

##### `resetSummarization` <a name="resetSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization"></a>

```java
public void resetSummarization()
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel"></a>

```java
public void resetSummarizationModel()
```

##### `resetSyncInterval` <a name="resetSyncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSyncInterval"></a>

```java
public void resetSyncInterval()
```

##### `resetSystemPromptAisearch` <a name="resetSystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch"></a>

```java
public void resetSystemPromptAisearch()
```

##### `resetSystemPromptIndexSummarization` <a name="resetSystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization"></a>

```java
public void resetSystemPromptIndexSummarization()
```

##### `resetSystemPromptRewriteQuery` <a name="resetSystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery"></a>

```java
public void resetSystemPromptRewriteQuery()
```

##### `resetTokenId` <a name="resetTokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId"></a>

```java
public void resetTokenId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstance;

AiSearchInstance.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstance;

AiSearchInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstance;

AiSearchInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstance;

AiSearchInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiSearchInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiSearchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata">customMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable">enable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions">indexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod">indexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity">lastActivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId">publicEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams">publicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions">retrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams">sourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName">vectorizeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput">aiGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput">aisearchModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput">cacheInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput">cacheThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput">cacheTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput">chunkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput">chunkOverlapInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput">customMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput">embeddingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput">fusionMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput">hybridSearchEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput">indexingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput">indexMethodInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput">maxNumResultsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput">publicEndpointParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput">rerankingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput">rerankingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput">retrievalOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput">rewriteModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput">rewriteQueryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput">scoreThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput">sourceParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput">summarizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput">summarizationModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput">syncIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput">systemPromptAisearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput">systemPromptIndexSummarizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput">systemPromptRewriteQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput">tokenIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId">aiGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel">aisearchModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache">cache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold">cacheThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk">chunk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap">chunkOverlap</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel">embeddingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod">fusionMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled">hybridSearchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults">maxNumResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking">reranking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel">rerankingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel">rewriteModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery">rewriteQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold">scoreThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization">summarization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval">syncInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch">systemPromptAisearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization">systemPromptIndexSummarization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery">systemPromptRewriteQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId">tokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata"></a>

```java
public AiSearchInstanceCustomMetadataList getCustomMetadata();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion"></a>

```java
public java.lang.Number getEngineVersion();
```

- *Type:* java.lang.Number

---

##### `indexingOptions`<sup>Required</sup> <a name="indexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions"></a>

```java
public AiSearchInstanceIndexingOptionsOutputReference getIndexingOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a>

---

##### `indexMethod`<sup>Required</sup> <a name="indexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod"></a>

```java
public AiSearchInstanceIndexMethodOutputReference getIndexMethod();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a>

---

##### `lastActivity`<sup>Required</sup> <a name="lastActivity" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity"></a>

```java
public java.lang.String getLastActivity();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata"></a>

```java
public AiSearchInstanceMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `publicEndpointId`<sup>Required</sup> <a name="publicEndpointId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId"></a>

```java
public java.lang.String getPublicEndpointId();
```

- *Type:* java.lang.String

---

##### `publicEndpointParams`<sup>Required</sup> <a name="publicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams"></a>

```java
public AiSearchInstancePublicEndpointParamsOutputReference getPublicEndpointParams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `retrievalOptions`<sup>Required</sup> <a name="retrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions"></a>

```java
public AiSearchInstanceRetrievalOptionsOutputReference getRetrievalOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `sourceParams`<sup>Required</sup> <a name="sourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams"></a>

```java
public AiSearchInstanceSourceParamsOutputReference getSourceParams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `vectorizeName`<sup>Required</sup> <a name="vectorizeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName"></a>

```java
public java.lang.String getVectorizeName();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `aiGatewayIdInput`<sup>Optional</sup> <a name="aiGatewayIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput"></a>

```java
public java.lang.String getAiGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `aisearchModelInput`<sup>Optional</sup> <a name="aisearchModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput"></a>

```java
public java.lang.String getAisearchModelInput();
```

- *Type:* java.lang.String

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput"></a>

```java
public java.lang.Boolean|IResolvable getCacheInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheThresholdInput`<sup>Optional</sup> <a name="cacheThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput"></a>

```java
public java.lang.String getCacheThresholdInput();
```

- *Type:* java.lang.String

---

##### `cacheTtlInput`<sup>Optional</sup> <a name="cacheTtlInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput"></a>

```java
public java.lang.Number getCacheTtlInput();
```

- *Type:* java.lang.Number

---

##### `chunkInput`<sup>Optional</sup> <a name="chunkInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput"></a>

```java
public java.lang.Boolean|IResolvable getChunkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chunkOverlapInput`<sup>Optional</sup> <a name="chunkOverlapInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput"></a>

```java
public java.lang.Number getChunkOverlapInput();
```

- *Type:* java.lang.Number

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput"></a>

```java
public java.lang.Number getChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceCustomMetadata> getCustomMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>>

---

##### `embeddingModelInput`<sup>Optional</sup> <a name="embeddingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput"></a>

```java
public java.lang.String getEmbeddingModelInput();
```

- *Type:* java.lang.String

---

##### `fusionMethodInput`<sup>Optional</sup> <a name="fusionMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput"></a>

```java
public java.lang.String getFusionMethodInput();
```

- *Type:* java.lang.String

---

##### `hybridSearchEnabledInput`<sup>Optional</sup> <a name="hybridSearchEnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHybridSearchEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexingOptionsInput`<sup>Optional</sup> <a name="indexingOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput"></a>

```java
public IResolvable|AiSearchInstanceIndexingOptions getIndexingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `indexMethodInput`<sup>Optional</sup> <a name="indexMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput"></a>

```java
public IResolvable|AiSearchInstanceIndexMethod getIndexMethodInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `maxNumResultsInput`<sup>Optional</sup> <a name="maxNumResultsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput"></a>

```java
public java.lang.Number getMaxNumResultsInput();
```

- *Type:* java.lang.Number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput"></a>

```java
public IResolvable|AiSearchInstanceMetadata getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput"></a>

```java
public java.lang.Boolean|IResolvable getPausedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicEndpointParamsInput`<sup>Optional</sup> <a name="publicEndpointParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParams getPublicEndpointParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `rerankingInput`<sup>Optional</sup> <a name="rerankingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput"></a>

```java
public java.lang.Boolean|IResolvable getRerankingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rerankingModelInput`<sup>Optional</sup> <a name="rerankingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput"></a>

```java
public java.lang.String getRerankingModelInput();
```

- *Type:* java.lang.String

---

##### `retrievalOptionsInput`<sup>Optional</sup> <a name="retrievalOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput"></a>

```java
public IResolvable|AiSearchInstanceRetrievalOptions getRetrievalOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `rewriteModelInput`<sup>Optional</sup> <a name="rewriteModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput"></a>

```java
public java.lang.String getRewriteModelInput();
```

- *Type:* java.lang.String

---

##### `rewriteQueryInput`<sup>Optional</sup> <a name="rewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getRewriteQueryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scoreThresholdInput`<sup>Optional</sup> <a name="scoreThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput"></a>

```java
public java.lang.Number getScoreThresholdInput();
```

- *Type:* java.lang.Number

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceParamsInput`<sup>Optional</sup> <a name="sourceParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput"></a>

```java
public IResolvable|AiSearchInstanceSourceParams getSourceParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `summarizationInput`<sup>Optional</sup> <a name="summarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput"></a>

```java
public java.lang.Boolean|IResolvable getSummarizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput"></a>

```java
public java.lang.String getSummarizationModelInput();
```

- *Type:* java.lang.String

---

##### `syncIntervalInput`<sup>Optional</sup> <a name="syncIntervalInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput"></a>

```java
public java.lang.Number getSyncIntervalInput();
```

- *Type:* java.lang.Number

---

##### `systemPromptAisearchInput`<sup>Optional</sup> <a name="systemPromptAisearchInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput"></a>

```java
public java.lang.String getSystemPromptAisearchInput();
```

- *Type:* java.lang.String

---

##### `systemPromptIndexSummarizationInput`<sup>Optional</sup> <a name="systemPromptIndexSummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput"></a>

```java
public java.lang.String getSystemPromptIndexSummarizationInput();
```

- *Type:* java.lang.String

---

##### `systemPromptRewriteQueryInput`<sup>Optional</sup> <a name="systemPromptRewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput"></a>

```java
public java.lang.String getSystemPromptRewriteQueryInput();
```

- *Type:* java.lang.String

---

##### `tokenIdInput`<sup>Optional</sup> <a name="tokenIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput"></a>

```java
public java.lang.String getTokenIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `aiGatewayId`<sup>Required</sup> <a name="aiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId"></a>

```java
public java.lang.String getAiGatewayId();
```

- *Type:* java.lang.String

---

##### `aisearchModel`<sup>Required</sup> <a name="aisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel"></a>

```java
public java.lang.String getAisearchModel();
```

- *Type:* java.lang.String

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache"></a>

```java
public java.lang.Boolean|IResolvable getCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheThreshold`<sup>Required</sup> <a name="cacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold"></a>

```java
public java.lang.String getCacheThreshold();
```

- *Type:* java.lang.String

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl"></a>

```java
public java.lang.Number getCacheTtl();
```

- *Type:* java.lang.Number

---

##### `chunk`<sup>Required</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk"></a>

```java
public java.lang.Boolean|IResolvable getChunk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chunkOverlap`<sup>Required</sup> <a name="chunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap"></a>

```java
public java.lang.Number getChunkOverlap();
```

- *Type:* java.lang.Number

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

---

##### `embeddingModel`<sup>Required</sup> <a name="embeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel"></a>

```java
public java.lang.String getEmbeddingModel();
```

- *Type:* java.lang.String

---

##### `fusionMethod`<sup>Required</sup> <a name="fusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod"></a>

```java
public java.lang.String getFusionMethod();
```

- *Type:* java.lang.String

---

##### `hybridSearchEnabled`<sup>Required</sup> <a name="hybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHybridSearchEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxNumResults`<sup>Required</sup> <a name="maxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults"></a>

```java
public java.lang.Number getMaxNumResults();
```

- *Type:* java.lang.Number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reranking`<sup>Required</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking"></a>

```java
public java.lang.Boolean|IResolvable getReranking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rerankingModel`<sup>Required</sup> <a name="rerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel"></a>

```java
public java.lang.String getRerankingModel();
```

- *Type:* java.lang.String

---

##### `rewriteModel`<sup>Required</sup> <a name="rewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel"></a>

```java
public java.lang.String getRewriteModel();
```

- *Type:* java.lang.String

---

##### `rewriteQuery`<sup>Required</sup> <a name="rewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery"></a>

```java
public java.lang.Boolean|IResolvable getRewriteQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scoreThreshold`<sup>Required</sup> <a name="scoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold"></a>

```java
public java.lang.Number getScoreThreshold();
```

- *Type:* java.lang.Number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization"></a>

```java
public java.lang.Boolean|IResolvable getSummarization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

---

##### `syncInterval`<sup>Required</sup> <a name="syncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval"></a>

```java
public java.lang.Number getSyncInterval();
```

- *Type:* java.lang.Number

---

##### `systemPromptAisearch`<sup>Required</sup> <a name="systemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch"></a>

```java
public java.lang.String getSystemPromptAisearch();
```

- *Type:* java.lang.String

---

##### `systemPromptIndexSummarization`<sup>Required</sup> <a name="systemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization"></a>

```java
public java.lang.String getSystemPromptIndexSummarization();
```

- *Type:* java.lang.String

---

##### `systemPromptRewriteQuery`<sup>Required</sup> <a name="systemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery"></a>

```java
public java.lang.String getSystemPromptRewriteQuery();
```

- *Type:* java.lang.String

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId"></a>

```java
public java.lang.String getTokenId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchInstanceConfig <a name="AiSearchInstanceConfig" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceConfig;

AiSearchInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .id(java.lang.String)
//  .aiGatewayId(java.lang.String)
//  .aisearchModel(java.lang.String)
//  .cache(java.lang.Boolean|IResolvable)
//  .cacheThreshold(java.lang.String)
//  .cacheTtl(java.lang.Number)
//  .chunk(java.lang.Boolean|IResolvable)
//  .chunkOverlap(java.lang.Number)
//  .chunkSize(java.lang.Number)
//  .customMetadata(IResolvable|java.util.List<AiSearchInstanceCustomMetadata>)
//  .embeddingModel(java.lang.String)
//  .fusionMethod(java.lang.String)
//  .hybridSearchEnabled(java.lang.Boolean|IResolvable)
//  .indexingOptions(AiSearchInstanceIndexingOptions)
//  .indexMethod(AiSearchInstanceIndexMethod)
//  .maxNumResults(java.lang.Number)
//  .metadata(AiSearchInstanceMetadata)
//  .paused(java.lang.Boolean|IResolvable)
//  .publicEndpointParams(AiSearchInstancePublicEndpointParams)
//  .reranking(java.lang.Boolean|IResolvable)
//  .rerankingModel(java.lang.String)
//  .retrievalOptions(AiSearchInstanceRetrievalOptions)
//  .rewriteModel(java.lang.String)
//  .rewriteQuery(java.lang.Boolean|IResolvable)
//  .scoreThreshold(java.lang.Number)
//  .source(java.lang.String)
//  .sourceParams(AiSearchInstanceSourceParams)
//  .summarization(java.lang.Boolean|IResolvable)
//  .summarizationModel(java.lang.String)
//  .syncInterval(java.lang.Number)
//  .systemPromptAisearch(java.lang.String)
//  .systemPromptIndexSummarization(java.lang.String)
//  .systemPromptRewriteQuery(java.lang.String)
//  .tokenId(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId">aiGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel">aisearchModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache">cache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold">cacheThreshold</a></code> | <code>java.lang.String</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | Cache entry TTL in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk">chunk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap">chunkOverlap</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata">customMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel">embeddingModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod">fusionMethod</a></code> | <code>java.lang.String</code> | Available values: "max", "rrf". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled">hybridSearchEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated — use index_method instead. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions">indexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod">indexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | Controls which storage backends are used during indexing. Defaults to vector-only. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults">maxNumResults</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams">publicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking">reranking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel">rerankingModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions">retrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel">rewriteModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery">rewriteQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold">scoreThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams">sourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization">summarization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval">syncInterval</a></code> | <code>java.lang.Number</code> | Interval between automatic syncs, in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch">systemPromptAisearch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization">systemPromptIndexSummarization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery">systemPromptRewriteQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId">tokenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "r2", "web-crawler". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aiGatewayId`<sup>Optional</sup> <a name="aiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId"></a>

```java
public java.lang.String getAiGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `aisearchModel`<sup>Optional</sup> <a name="aisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel"></a>

```java
public java.lang.String getAisearchModel();
```

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache"></a>

```java
public java.lang.Boolean|IResolvable getCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `cacheThreshold`<sup>Optional</sup> <a name="cacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold"></a>

```java
public java.lang.String getCacheThreshold();
```

- *Type:* java.lang.String

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `cacheTtl`<sup>Optional</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl"></a>

```java
public java.lang.Number getCacheTtl();
```

- *Type:* java.lang.Number

Cache entry TTL in seconds.

Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
Available values: 600, 1800, 3600, 7200, 21600, 43200, 86400, 172800, 259200, 518400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_ttl AiSearchInstance#cache_ttl}

---

##### `chunk`<sup>Optional</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk"></a>

```java
public java.lang.Boolean|IResolvable getChunk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `chunkOverlap`<sup>Optional</sup> <a name="chunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap"></a>

```java
public java.lang.Number getChunkOverlap();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceCustomMetadata> getCustomMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `embeddingModel`<sup>Optional</sup> <a name="embeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel"></a>

```java
public java.lang.String getEmbeddingModel();
```

- *Type:* java.lang.String

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `fusionMethod`<sup>Optional</sup> <a name="fusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod"></a>

```java
public java.lang.String getFusionMethod();
```

- *Type:* java.lang.String

Available values: "max", "rrf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}

---

##### `hybridSearchEnabled`<sup>Optional</sup> <a name="hybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHybridSearchEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated — use index_method instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}

---

##### `indexingOptions`<sup>Optional</sup> <a name="indexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions"></a>

```java
public AiSearchInstanceIndexingOptions getIndexingOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}.

---

##### `indexMethod`<sup>Optional</sup> <a name="indexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod"></a>

```java
public AiSearchInstanceIndexMethod getIndexMethod();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

Controls which storage backends are used during indexing. Defaults to vector-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}

---

##### `maxNumResults`<sup>Optional</sup> <a name="maxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults"></a>

```java
public java.lang.Number getMaxNumResults();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata"></a>

```java
public AiSearchInstanceMetadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `publicEndpointParams`<sup>Optional</sup> <a name="publicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams"></a>

```java
public AiSearchInstancePublicEndpointParams getPublicEndpointParams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `reranking`<sup>Optional</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking"></a>

```java
public java.lang.Boolean|IResolvable getReranking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `rerankingModel`<sup>Optional</sup> <a name="rerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel"></a>

```java
public java.lang.String getRerankingModel();
```

- *Type:* java.lang.String

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `retrievalOptions`<sup>Optional</sup> <a name="retrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions"></a>

```java
public AiSearchInstanceRetrievalOptions getRetrievalOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}.

---

##### `rewriteModel`<sup>Optional</sup> <a name="rewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel"></a>

```java
public java.lang.String getRewriteModel();
```

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `rewriteQuery`<sup>Optional</sup> <a name="rewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery"></a>

```java
public java.lang.Boolean|IResolvable getRewriteQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `scoreThreshold`<sup>Optional</sup> <a name="scoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold"></a>

```java
public java.lang.Number getScoreThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `sourceParams`<sup>Optional</sup> <a name="sourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams"></a>

```java
public AiSearchInstanceSourceParams getSourceParams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization"></a>

```java
public java.lang.Boolean|IResolvable getSummarization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `syncInterval`<sup>Optional</sup> <a name="syncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval"></a>

```java
public java.lang.Number getSyncInterval();
```

- *Type:* java.lang.Number

Interval between automatic syncs, in seconds.

Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}

---

##### `systemPromptAisearch`<sup>Optional</sup> <a name="systemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch"></a>

```java
public java.lang.String getSystemPromptAisearch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `systemPromptIndexSummarization`<sup>Optional</sup> <a name="systemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization"></a>

```java
public java.lang.String getSystemPromptIndexSummarization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `systemPromptRewriteQuery`<sup>Optional</sup> <a name="systemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery"></a>

```java
public java.lang.String getSystemPromptRewriteQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `tokenId`<sup>Optional</sup> <a name="tokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId"></a>

```java
public java.lang.String getTokenId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

### AiSearchInstanceCustomMetadata <a name="AiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceCustomMetadata;

AiSearchInstanceCustomMetadata.builder()
    .dataType(java.lang.String)
    .fieldName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Available values: "text", "number", "boolean", "datetime". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Available values: "text", "number", "boolean", "datetime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}.

---

### AiSearchInstanceIndexingOptions <a name="AiSearchInstanceIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceIndexingOptions;

AiSearchInstanceIndexingOptions.builder()
//  .keywordTokenizer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer">keywordTokenizer</a></code> | <code>java.lang.String</code> | Tokenizer used for keyword search indexing. |

---

##### `keywordTokenizer`<sup>Optional</sup> <a name="keywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer"></a>

```java
public java.lang.String getKeywordTokenizer();
```

- *Type:* java.lang.String

Tokenizer used for keyword search indexing.

porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
Available values: "porter", "trigram".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword_tokenizer AiSearchInstance#keyword_tokenizer}

---

### AiSearchInstanceIndexMethod <a name="AiSearchInstanceIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceIndexMethod;

AiSearchInstanceIndexMethod.builder()
    .keyword(java.lang.Boolean|IResolvable)
    .vector(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword">keyword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable keyword (BM25) storage backend. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector">vector</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable vector (embedding) storage backend. |

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword"></a>

```java
public java.lang.Boolean|IResolvable getKeyword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable keyword (BM25) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword AiSearchInstance#keyword}

---

##### `vector`<sup>Required</sup> <a name="vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector"></a>

```java
public java.lang.Boolean|IResolvable getVector();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable vector (embedding) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#vector AiSearchInstance#vector}

---

### AiSearchInstanceMetadata <a name="AiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceMetadata;

AiSearchInstanceMetadata.builder()
//  .createdFromAisearchWizard(java.lang.Boolean|IResolvable)
//  .workerDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard">createdFromAisearchWizard</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain">workerDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}. |

---

##### `createdFromAisearchWizard`<sup>Optional</sup> <a name="createdFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard"></a>

```java
public java.lang.Boolean|IResolvable getCreatedFromAisearchWizard();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

##### `workerDomain`<sup>Optional</sup> <a name="workerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain"></a>

```java
public java.lang.String getWorkerDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

### AiSearchInstancePublicEndpointParams <a name="AiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParams;

AiSearchInstancePublicEndpointParams.builder()
//  .authorizedHosts(java.util.List<java.lang.String>)
//  .chatCompletionsEndpoint(AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint)
//  .enabled(java.lang.Boolean|IResolvable)
//  .mcp(AiSearchInstancePublicEndpointParamsMcp)
//  .rateLimit(AiSearchInstancePublicEndpointParamsRateLimit)
//  .searchEndpoint(AiSearchInstancePublicEndpointParamsSearchEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts">authorizedHosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint">chatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit">rateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint">searchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}. |

---

##### `authorizedHosts`<sup>Optional</sup> <a name="authorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts"></a>

```java
public java.util.List<java.lang.String> getAuthorizedHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

##### `chatCompletionsEndpoint`<sup>Optional</sup> <a name="chatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```java
public AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint getChatCompletionsEndpoint();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp"></a>

```java
public AiSearchInstancePublicEndpointParamsMcp getMcp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit"></a>

```java
public AiSearchInstancePublicEndpointParamsRateLimit getRateLimit();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

##### `searchEndpoint`<sup>Optional</sup> <a name="searchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint"></a>

```java
public AiSearchInstancePublicEndpointParamsSearchEndpoint getSearchEndpoint();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

### AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;

AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.builder()
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsMcp <a name="AiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsMcp;

AiSearchInstancePublicEndpointParamsMcp.builder()
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#description AiSearchInstance#description}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable MCP endpoint for this public endpoint. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#description AiSearchInstance#description}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsRateLimit <a name="AiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsRateLimit;

AiSearchInstancePublicEndpointParamsRateLimit.builder()
//  .periodMs(java.lang.Number)
//  .requests(java.lang.Number)
//  .technique(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs">periodMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests">requests</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique">technique</a></code> | <code>java.lang.String</code> | Available values: "fixed", "sliding". |

---

##### `periodMs`<sup>Optional</sup> <a name="periodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs"></a>

```java
public java.lang.Number getPeriodMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

### AiSearchInstancePublicEndpointParamsSearchEndpoint <a name="AiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsSearchEndpoint;

AiSearchInstancePublicEndpointParamsSearchEndpoint.builder()
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable search endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstanceRetrievalOptions <a name="AiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceRetrievalOptions;

AiSearchInstanceRetrievalOptions.builder()
//  .boostBy(IResolvable|java.util.List<AiSearchInstanceRetrievalOptionsBoostBy>)
//  .keywordMatchMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy">boostBy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>></code> | Metadata fields to boost search results by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode">keywordMatchMode</a></code> | <code>java.lang.String</code> | Controls which documents are candidates for BM25 scoring. |

---

##### `boostBy`<sup>Optional</sup> <a name="boostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceRetrievalOptionsBoostBy> getBoostBy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>>

Metadata fields to boost search results by.

Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#boost_by AiSearchInstance#boost_by}

---

##### `keywordMatchMode`<sup>Optional</sup> <a name="keywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode"></a>

```java
public java.lang.String getKeywordMatchMode();
```

- *Type:* java.lang.String

Controls which documents are candidates for BM25 scoring.

'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
Available values: "and", "or".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword_match_mode AiSearchInstance#keyword_match_mode}

---

### AiSearchInstanceRetrievalOptionsBoostBy <a name="AiSearchInstanceRetrievalOptionsBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceRetrievalOptionsBoostBy;

AiSearchInstanceRetrievalOptionsBoostBy.builder()
    .field(java.lang.String)
//  .direction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field">field</a></code> | <code>java.lang.String</code> | Metadata field name to boost by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction">direction</a></code> | <code>java.lang.String</code> | Boost direction. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Metadata field name to boost by.

Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field AiSearchInstance#field}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Boost direction.

'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
Available values: "asc", "desc", "exists", "not_exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#direction AiSearchInstance#direction}

---

### AiSearchInstanceSourceParams <a name="AiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParams;

AiSearchInstanceSourceParams.builder()
//  .excludeItems(java.util.List<java.lang.String>)
//  .includeItems(java.util.List<java.lang.String>)
//  .prefix(java.lang.String)
//  .r2Jurisdiction(java.lang.String)
//  .webCrawler(AiSearchInstanceSourceParamsWebCrawler)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems">excludeItems</a></code> | <code>java.util.List<java.lang.String></code> | List of path patterns to exclude. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems">includeItems</a></code> | <code>java.util.List<java.lang.String></code> | List of path patterns to include. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler">webCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}. |

---

##### `excludeItems`<sup>Optional</sup> <a name="excludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems"></a>

```java
public java.util.List<java.lang.String> getExcludeItems();
```

- *Type:* java.util.List<java.lang.String>

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

##### `includeItems`<sup>Optional</sup> <a name="includeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems"></a>

```java
public java.util.List<java.lang.String> getIncludeItems();
```

- *Type:* java.util.List<java.lang.String>

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

##### `r2Jurisdiction`<sup>Optional</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction"></a>

```java
public java.lang.String getR2Jurisdiction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `webCrawler`<sup>Optional</sup> <a name="webCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler"></a>

```java
public AiSearchInstanceSourceParamsWebCrawler getWebCrawler();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

### AiSearchInstanceSourceParamsWebCrawler <a name="AiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawler;

AiSearchInstanceSourceParamsWebCrawler.builder()
//  .crawlOptions(AiSearchInstanceSourceParamsWebCrawlerCrawlOptions)
//  .parseOptions(AiSearchInstanceSourceParamsWebCrawlerParseOptions)
//  .parseType(java.lang.String)
//  .storeOptions(AiSearchInstanceSourceParamsWebCrawlerStoreOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions">crawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions">parseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType">parseType</a></code> | <code>java.lang.String</code> | Available values: "sitemap", "feed-rss", "crawl". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}. |

---

##### `crawlOptions`<sup>Optional</sup> <a name="crawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerCrawlOptions getCrawlOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}.

---

##### `parseOptions`<sup>Optional</sup> <a name="parseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerParseOptions getParseOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

##### `parseType`<sup>Optional</sup> <a name="parseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType"></a>

```java
public java.lang.String getParseType();
```

- *Type:* java.lang.String

Available values: "sitemap", "feed-rss", "crawl".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

##### `storeOptions`<sup>Optional</sup> <a name="storeOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerStoreOptions getStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

### AiSearchInstanceSourceParamsWebCrawlerCrawlOptions <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions;

AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.builder()
//  .depth(java.lang.Number)
//  .includeExternalLinks(java.lang.Boolean|IResolvable)
//  .includeSubdomains(java.lang.Boolean|IResolvable)
//  .maxAge(java.lang.Number)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth">depth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks">includeExternalLinks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains">includeSubdomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source">source</a></code> | <code>java.lang.String</code> | Available values: "all", "sitemaps", "links". |

---

##### `depth`<sup>Optional</sup> <a name="depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth"></a>

```java
public java.lang.Number getDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}.

---

##### `includeExternalLinks`<sup>Optional</sup> <a name="includeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExternalLinks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}.

---

##### `includeSubdomains`<sup>Optional</sup> <a name="includeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSubdomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Available values: "all", "sitemaps", "links".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerParseOptions;

AiSearchInstanceSourceParamsWebCrawlerParseOptions.builder()
//  .contentSelector(IResolvable|java.util.List<AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector>)
//  .includeHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .includeImages(java.lang.Boolean|IResolvable)
//  .specificSitemaps(java.util.List<java.lang.String>)
//  .useBrowserRendering(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector">contentSelector</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>></code> | List of path-to-selector mappings for extracting specific content from crawled pages. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders">includeHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Up to 5 custom HTTP headers sent with each crawl request. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages">includeImages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps">specificSitemaps</a></code> | <code>java.util.List<java.lang.String></code> | List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering">useBrowserRendering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}. |

---

##### `contentSelector`<sup>Optional</sup> <a name="contentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector> getContentSelector();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>>

List of path-to-selector mappings for extracting specific content from crawled pages.

Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#content_selector AiSearchInstance#content_selector}

---

##### `includeHeaders`<sup>Optional</sup> <a name="includeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Up to 5 custom HTTP headers sent with each crawl request.

Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}

---

##### `includeImages`<sup>Optional</sup> <a name="includeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages"></a>

```java
public java.lang.Boolean|IResolvable getIncludeImages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

##### `specificSitemaps`<sup>Optional</sup> <a name="specificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps"></a>

```java
public java.util.List<java.lang.String> getSpecificSitemaps();
```

- *Type:* java.util.List<java.lang.String>

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

##### `useBrowserRendering`<sup>Optional</sup> <a name="useBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering"></a>

```java
public java.lang.Boolean|IResolvable getUseBrowserRendering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector;

AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.builder()
    .path(java.lang.String)
    .selector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path">path</a></code> | <code>java.lang.String</code> | Glob pattern to match against the page URL path. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector">selector</a></code> | <code>java.lang.String</code> | CSS selector to extract content from pages matching the path pattern. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Glob pattern to match against the page URL path.

Uses standard glob syntax: * matches within a segment, ** crosses directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#path AiSearchInstance#path}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

CSS selector to extract content from pages matching the path pattern.

Must not contain disallowed characters (;, `, $, {, }, ). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#selector AiSearchInstance#selector}

---

### AiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions;

AiSearchInstanceSourceParamsWebCrawlerStoreOptions.builder()
    .storageId(java.lang.String)
//  .r2Jurisdiction(java.lang.String)
//  .storageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId">storageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Available values: "r2". |

---

##### `storageId`<sup>Required</sup> <a name="storageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId"></a>

```java
public java.lang.String getStorageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

##### `r2Jurisdiction`<sup>Optional</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction"></a>

```java
public java.lang.String getR2Jurisdiction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchInstanceCustomMetadataList <a name="AiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceCustomMetadataList;

new AiSearchInstanceCustomMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get"></a>

```java
public AiSearchInstanceCustomMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceCustomMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>>

---


### AiSearchInstanceCustomMetadataOutputReference <a name="AiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceCustomMetadataOutputReference;

new AiSearchInstanceCustomMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceCustomMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>

---


### AiSearchInstanceIndexingOptionsOutputReference <a name="AiSearchInstanceIndexingOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceIndexingOptionsOutputReference;

new AiSearchInstanceIndexingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resetKeywordTokenizer">resetKeywordTokenizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeywordTokenizer` <a name="resetKeywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resetKeywordTokenizer"></a>

```java
public void resetKeywordTokenizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput">keywordTokenizerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer">keywordTokenizer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keywordTokenizerInput`<sup>Optional</sup> <a name="keywordTokenizerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput"></a>

```java
public java.lang.String getKeywordTokenizerInput();
```

- *Type:* java.lang.String

---

##### `keywordTokenizer`<sup>Required</sup> <a name="keywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer"></a>

```java
public java.lang.String getKeywordTokenizer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceIndexingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---


### AiSearchInstanceIndexMethodOutputReference <a name="AiSearchInstanceIndexMethodOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceIndexMethodOutputReference;

new AiSearchInstanceIndexMethodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput">keywordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput">vectorInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword">keyword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector">vector</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput"></a>

```java
public java.lang.Boolean|IResolvable getKeywordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vectorInput`<sup>Optional</sup> <a name="vectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput"></a>

```java
public java.lang.Boolean|IResolvable getVectorInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword"></a>

```java
public java.lang.Boolean|IResolvable getKeyword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vector`<sup>Required</sup> <a name="vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector"></a>

```java
public java.lang.Boolean|IResolvable getVector();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceIndexMethod getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---


### AiSearchInstanceMetadataOutputReference <a name="AiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceMetadataOutputReference;

new AiSearchInstanceMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard">resetCreatedFromAisearchWizard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain">resetWorkerDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatedFromAisearchWizard` <a name="resetCreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard"></a>

```java
public void resetCreatedFromAisearchWizard()
```

##### `resetWorkerDomain` <a name="resetWorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain"></a>

```java
public void resetWorkerDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput">createdFromAisearchWizardInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput">workerDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">createdFromAisearchWizard</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain">workerDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdFromAisearchWizardInput`<sup>Optional</sup> <a name="createdFromAisearchWizardInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatedFromAisearchWizardInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `workerDomainInput`<sup>Optional</sup> <a name="workerDomainInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput"></a>

```java
public java.lang.String getWorkerDomainInput();
```

- *Type:* java.lang.String

---

##### `createdFromAisearchWizard`<sup>Required</sup> <a name="createdFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```java
public java.lang.Boolean|IResolvable getCreatedFromAisearchWizard();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `workerDomain`<sup>Required</sup> <a name="workerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```java
public java.lang.String getWorkerDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---


### AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;

new AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### AiSearchInstancePublicEndpointParamsMcpOutputReference <a name="AiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsMcpOutputReference;

new AiSearchInstancePublicEndpointParamsMcpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsMcp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---


### AiSearchInstancePublicEndpointParamsOutputReference <a name="AiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsOutputReference;

new AiSearchInstancePublicEndpointParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint">putChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp">putMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit">putRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint">putSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts">resetAuthorizedHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint">resetChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp">resetMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint">resetSearchEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChatCompletionsEndpoint` <a name="putChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```java
public void putChatCompletionsEndpoint(AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `putMcp` <a name="putMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp"></a>

```java
public void putMcp(AiSearchInstancePublicEndpointParamsMcp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `putRateLimit` <a name="putRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit"></a>

```java
public void putRateLimit(AiSearchInstancePublicEndpointParamsRateLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `putSearchEndpoint` <a name="putSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```java
public void putSearchEndpoint(AiSearchInstancePublicEndpointParamsSearchEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `resetAuthorizedHosts` <a name="resetAuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```java
public void resetAuthorizedHosts()
```

##### `resetChatCompletionsEndpoint` <a name="resetChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```java
public void resetChatCompletionsEndpoint()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMcp` <a name="resetMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp"></a>

```java
public void resetMcp()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetSearchEndpoint` <a name="resetSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```java
public void resetSearchEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">rateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">searchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput">authorizedHostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">chatCompletionsEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput">mcpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput">searchEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">authorizedHosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chatCompletionsEndpoint`<sup>Required</sup> <a name="chatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```java
public AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference getChatCompletionsEndpoint();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```java
public AiSearchInstancePublicEndpointParamsMcpOutputReference getMcp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```java
public AiSearchInstancePublicEndpointParamsRateLimitOutputReference getRateLimit();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `searchEndpoint`<sup>Required</sup> <a name="searchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```java
public AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference getSearchEndpoint();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `authorizedHostsInput`<sup>Optional</sup> <a name="authorizedHostsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `chatCompletionsEndpointInput`<sup>Optional</sup> <a name="chatCompletionsEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint getChatCompletionsEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mcpInput`<sup>Optional</sup> <a name="mcpInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsMcp getMcpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsRateLimit getRateLimitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `searchEndpointInput`<sup>Optional</sup> <a name="searchEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsSearchEndpoint getSearchEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `authorizedHosts`<sup>Required</sup> <a name="authorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```java
public java.util.List<java.lang.String> getAuthorizedHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---


### AiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="AiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference;

new AiSearchInstancePublicEndpointParamsRateLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs">resetPeriodMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique">resetTechnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriodMs` <a name="resetPeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```java
public void resetPeriodMs()
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```java
public void resetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">periodMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput">requestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">periodMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodMsInput`<sup>Optional</sup> <a name="periodMsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```java
public java.lang.Number getPeriodMsInput();
```

- *Type:* java.lang.Number

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```java
public java.lang.Number getRequestsInput();
```

- *Type:* java.lang.Number

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```java
public java.lang.String getTechniqueInput();
```

- *Type:* java.lang.String

---

##### `periodMs`<sup>Required</sup> <a name="periodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```java
public java.lang.Number getPeriodMs();
```

- *Type:* java.lang.Number

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsRateLimit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---


### AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;

new AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstancePublicEndpointParamsSearchEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### AiSearchInstanceRetrievalOptionsBoostByList <a name="AiSearchInstanceRetrievalOptionsBoostByList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceRetrievalOptionsBoostByList;

new AiSearchInstanceRetrievalOptionsBoostByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get"></a>

```java
public AiSearchInstanceRetrievalOptionsBoostByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceRetrievalOptionsBoostBy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>>

---


### AiSearchInstanceRetrievalOptionsBoostByOutputReference <a name="AiSearchInstanceRetrievalOptionsBoostByOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceRetrievalOptionsBoostByOutputReference;

new AiSearchInstanceRetrievalOptionsBoostByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resetDirection">resetDirection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resetDirection"></a>

```java
public void resetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceRetrievalOptionsBoostBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>

---


### AiSearchInstanceRetrievalOptionsOutputReference <a name="AiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceRetrievalOptionsOutputReference;

new AiSearchInstanceRetrievalOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy">putBoostBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetBoostBy">resetBoostBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetKeywordMatchMode">resetKeywordMatchMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoostBy` <a name="putBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy"></a>

```java
public void putBoostBy(IResolvable|java.util.List<AiSearchInstanceRetrievalOptionsBoostBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>>

---

##### `resetBoostBy` <a name="resetBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetBoostBy"></a>

```java
public void resetBoostBy()
```

##### `resetKeywordMatchMode` <a name="resetKeywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetKeywordMatchMode"></a>

```java
public void resetKeywordMatchMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy">boostBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput">boostByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput">keywordMatchModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">keywordMatchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boostBy`<sup>Required</sup> <a name="boostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy"></a>

```java
public AiSearchInstanceRetrievalOptionsBoostByList getBoostBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a>

---

##### `boostByInput`<sup>Optional</sup> <a name="boostByInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceRetrievalOptionsBoostBy> getBoostByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>>

---

##### `keywordMatchModeInput`<sup>Optional</sup> <a name="keywordMatchModeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput"></a>

```java
public java.lang.String getKeywordMatchModeInput();
```

- *Type:* java.lang.String

---

##### `keywordMatchMode`<sup>Required</sup> <a name="keywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```java
public java.lang.String getKeywordMatchMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceRetrievalOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---


### AiSearchInstanceSourceParamsOutputReference <a name="AiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsOutputReference;

new AiSearchInstanceSourceParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler">putWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems">resetExcludeItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems">resetIncludeItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction">resetR2Jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler">resetWebCrawler</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWebCrawler` <a name="putWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler"></a>

```java
public void putWebCrawler(AiSearchInstanceSourceParamsWebCrawler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `resetExcludeItems` <a name="resetExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems"></a>

```java
public void resetExcludeItems()
```

##### `resetIncludeItems` <a name="resetIncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems"></a>

```java
public void resetIncludeItems()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetR2Jurisdiction` <a name="resetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction"></a>

```java
public void resetR2Jurisdiction()
```

##### `resetWebCrawler` <a name="resetWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler"></a>

```java
public void resetWebCrawler()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler">webCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput">excludeItemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput">includeItemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput">r2JurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput">webCrawlerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems">excludeItems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems">includeItems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `webCrawler`<sup>Required</sup> <a name="webCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerOutputReference getWebCrawler();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `excludeItemsInput`<sup>Optional</sup> <a name="excludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeItemsInput`<sup>Optional</sup> <a name="includeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput"></a>

```java
public java.util.List<java.lang.String> getIncludeItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `r2JurisdictionInput`<sup>Optional</sup> <a name="r2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput"></a>

```java
public java.lang.String getR2JurisdictionInput();
```

- *Type:* java.lang.String

---

##### `webCrawlerInput`<sup>Optional</sup> <a name="webCrawlerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawler getWebCrawlerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `excludeItems`<sup>Required</sup> <a name="excludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```java
public java.util.List<java.lang.String> getExcludeItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeItems`<sup>Required</sup> <a name="includeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```java
public java.util.List<java.lang.String> getIncludeItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `r2Jurisdiction`<sup>Required</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```java
public java.lang.String getR2Jurisdiction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---


### AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;

new AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetDepth">resetDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeExternalLinks">resetIncludeExternalLinks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeSubdomains">resetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDepth` <a name="resetDepth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetDepth"></a>

```java
public void resetDepth()
```

##### `resetIncludeExternalLinks` <a name="resetIncludeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeExternalLinks"></a>

```java
public void resetIncludeExternalLinks()
```

##### `resetIncludeSubdomains` <a name="resetIncludeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeSubdomains"></a>

```java
public void resetIncludeSubdomains()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput">depthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput">includeExternalLinksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput">includeSubdomainsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth">depth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks">includeExternalLinks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains">includeSubdomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `depthInput`<sup>Optional</sup> <a name="depthInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput"></a>

```java
public java.lang.Number getDepthInput();
```

- *Type:* java.lang.Number

---

##### `includeExternalLinksInput`<sup>Optional</sup> <a name="includeExternalLinksInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExternalLinksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeSubdomainsInput`<sup>Optional</sup> <a name="includeSubdomainsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSubdomainsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `depth`<sup>Required</sup> <a name="depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth"></a>

```java
public java.lang.Number getDepth();
```

- *Type:* java.lang.Number

---

##### `includeExternalLinks`<sup>Required</sup> <a name="includeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExternalLinks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeSubdomains`<sup>Required</sup> <a name="includeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSubdomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerCrawlOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerOutputReference;

new AiSearchInstanceSourceParamsWebCrawlerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions">putCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions">putParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions">putStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetCrawlOptions">resetCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions">resetParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType">resetParseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions">resetStoreOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrawlOptions` <a name="putCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions"></a>

```java
public void putCrawlOptions(AiSearchInstanceSourceParamsWebCrawlerCrawlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `putParseOptions` <a name="putParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions"></a>

```java
public void putParseOptions(AiSearchInstanceSourceParamsWebCrawlerParseOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `putStoreOptions` <a name="putStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions"></a>

```java
public void putStoreOptions(AiSearchInstanceSourceParamsWebCrawlerStoreOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `resetCrawlOptions` <a name="resetCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetCrawlOptions"></a>

```java
public void resetCrawlOptions()
```

##### `resetParseOptions` <a name="resetParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions"></a>

```java
public void resetParseOptions()
```

##### `resetParseType` <a name="resetParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType"></a>

```java
public void resetParseType()
```

##### `resetStoreOptions` <a name="resetStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions"></a>

```java
public void resetStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions">crawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">parseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput">crawlOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput">parseOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput">parseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput">storeOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">parseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlOptions`<sup>Required</sup> <a name="crawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference getCrawlOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a>

---

##### `parseOptions`<sup>Required</sup> <a name="parseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference getParseOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `storeOptions`<sup>Required</sup> <a name="storeOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference getStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `crawlOptionsInput`<sup>Optional</sup> <a name="crawlOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerCrawlOptions getCrawlOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `parseOptionsInput`<sup>Optional</sup> <a name="parseOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptions getParseOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `parseTypeInput`<sup>Optional</sup> <a name="parseTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput"></a>

```java
public java.lang.String getParseTypeInput();
```

- *Type:* java.lang.String

---

##### `storeOptionsInput`<sup>Optional</sup> <a name="storeOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerStoreOptions getStoreOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `parseType`<sup>Required</sup> <a name="parseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```java
public java.lang.String getParseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawler getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector">putContentSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetContentSelector">resetContentSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders">resetIncludeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages">resetIncludeImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps">resetSpecificSitemaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering">resetUseBrowserRendering</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentSelector` <a name="putContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector"></a>

```java
public void putContentSelector(IResolvable|java.util.List<AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>>

---

##### `resetContentSelector` <a name="resetContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetContentSelector"></a>

```java
public void resetContentSelector()
```

##### `resetIncludeHeaders` <a name="resetIncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders"></a>

```java
public void resetIncludeHeaders()
```

##### `resetIncludeImages` <a name="resetIncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages"></a>

```java
public void resetIncludeImages()
```

##### `resetSpecificSitemaps` <a name="resetSpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps"></a>

```java
public void resetSpecificSitemaps()
```

##### `resetUseBrowserRendering` <a name="resetUseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering"></a>

```java
public void resetUseBrowserRendering()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector">contentSelector</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput">contentSelectorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput">includeHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput">includeImagesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput">specificSitemapsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput">useBrowserRenderingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">includeHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">includeImages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">specificSitemaps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">useBrowserRendering</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentSelector`<sup>Required</sup> <a name="contentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector"></a>

```java
public AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList getContentSelector();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a>

---

##### `contentSelectorInput`<sup>Optional</sup> <a name="contentSelectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput"></a>

```java
public IResolvable|java.util.List<AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector> getContentSelectorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>>

---

##### `includeHeadersInput`<sup>Optional</sup> <a name="includeHeadersInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeImagesInput`<sup>Optional</sup> <a name="includeImagesInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeImagesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specificSitemapsInput`<sup>Optional</sup> <a name="specificSitemapsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput"></a>

```java
public java.util.List<java.lang.String> getSpecificSitemapsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useBrowserRenderingInput`<sup>Optional</sup> <a name="useBrowserRenderingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput"></a>

```java
public java.lang.Boolean|IResolvable getUseBrowserRenderingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeHeaders`<sup>Required</sup> <a name="includeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeImages`<sup>Required</sup> <a name="includeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```java
public java.lang.Boolean|IResolvable getIncludeImages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specificSitemaps`<sup>Required</sup> <a name="specificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```java
public java.util.List<java.lang.String> getSpecificSitemaps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useBrowserRendering`<sup>Required</sup> <a name="useBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```java
public java.lang.Boolean|IResolvable getUseBrowserRendering();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_search_instance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;

new AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction">resetR2Jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetR2Jurisdiction` <a name="resetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction"></a>

```java
public void resetR2Jurisdiction()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType"></a>

```java
public void resetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput">r2JurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput">storageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">storageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `r2JurisdictionInput`<sup>Optional</sup> <a name="r2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput"></a>

```java
public java.lang.String getR2JurisdictionInput();
```

- *Type:* java.lang.String

---

##### `storageIdInput`<sup>Optional</sup> <a name="storageIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput"></a>

```java
public java.lang.String getStorageIdInput();
```

- *Type:* java.lang.String

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `r2Jurisdiction`<sup>Required</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```java
public java.lang.String getR2Jurisdiction();
```

- *Type:* java.lang.String

---

##### `storageId`<sup>Required</sup> <a name="storageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```java
public java.lang.String getStorageId();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerStoreOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---



