# `aiSearchInstance` Submodule <a name="`aiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.aiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchInstance <a name="AiSearchInstance" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  id: str,
  source: str,
  type: str,
  ai_gateway_id: str = None,
  aisearch_model: str = None,
  cache: bool | IResolvable = None,
  cache_threshold: str = None,
  chunk: bool | IResolvable = None,
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None,
  custom_metadata: IResolvable | typing.List[AiSearchInstanceCustomMetadata] = None,
  embedding_model: str = None,
  hybrid_search_enabled: bool | IResolvable = None,
  max_num_results: typing.Union[int, float] = None,
  metadata: AiSearchInstanceMetadata = None,
  paused: bool | IResolvable = None,
  public_endpoint_params: AiSearchInstancePublicEndpointParams = None,
  reranking: bool | IResolvable = None,
  reranking_model: str = None,
  rewrite_model: str = None,
  rewrite_query: bool | IResolvable = None,
  score_threshold: typing.Union[int, float] = None,
  source_params: AiSearchInstanceSourceParams = None,
  summarization: bool | IResolvable = None,
  summarization_model: str = None,
  system_prompt_aisearch: str = None,
  system_prompt_index_summarization: str = None,
  system_prompt_rewrite_query: str = None,
  token_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Use your AI Search ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.type">type</a></code> | <code>str</code> | Available values: "r2", "web-crawler". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aiGatewayId">ai_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aisearchModel">aisearch_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cache">cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheThreshold">cache_threshold</a></code> | <code>str</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunk">chunk</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.embeddingModel">embedding_model</a></code> | <code>str</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.hybridSearchEnabled">hybrid_search_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.maxNumResults">max_num_results</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.reranking">reranking</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rerankingModel">reranking_model</a></code> | <code>str</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteModel">rewrite_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteQuery">rewrite_query</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.sourceParams">source_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarization">summarization</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarizationModel">summarization_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptAisearch">system_prompt_aisearch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptIndexSummarization">system_prompt_index_summarization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptRewriteQuery">system_prompt_rewrite_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.tokenId">token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* str

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.type"></a>

- *Type:* str

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

##### `ai_gateway_id`<sup>Optional</sup> <a name="ai_gateway_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aiGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `aisearch_model`<sup>Optional</sup> <a name="aisearch_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.aisearchModel"></a>

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cache"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `cache_threshold`<sup>Optional</sup> <a name="cache_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.cacheThreshold"></a>

- *Type:* str

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `chunk`<sup>Optional</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunk"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkOverlap"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.chunkSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.customMetadata"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `embedding_model`<sup>Optional</sup> <a name="embedding_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.embeddingModel"></a>

- *Type:* str

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `hybrid_search_enabled`<sup>Optional</sup> <a name="hybrid_search_enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.hybridSearchEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}.

---

##### `max_num_results`<sup>Optional</sup> <a name="max_num_results" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.maxNumResults"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.paused"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `public_endpoint_params`<sup>Optional</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.publicEndpointParams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `reranking`<sup>Optional</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.reranking"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `reranking_model`<sup>Optional</sup> <a name="reranking_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rerankingModel"></a>

- *Type:* str

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `rewrite_model`<sup>Optional</sup> <a name="rewrite_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteModel"></a>

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `rewrite_query`<sup>Optional</sup> <a name="rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.rewriteQuery"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `score_threshold`<sup>Optional</sup> <a name="score_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scoreThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `source_params`<sup>Optional</sup> <a name="source_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.sourceParams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarization"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.summarizationModel"></a>

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `system_prompt_aisearch`<sup>Optional</sup> <a name="system_prompt_aisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptAisearch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `system_prompt_index_summarization`<sup>Optional</sup> <a name="system_prompt_index_summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptIndexSummarization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `system_prompt_rewrite_query`<sup>Optional</sup> <a name="system_prompt_rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.systemPromptRewriteQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `token_id`<sup>Optional</sup> <a name="token_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.tokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata">put_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams">put_public_endpoint_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams">put_source_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId">reset_ai_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel">reset_aisearch_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache">reset_cache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold">reset_cache_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk">reset_chunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap">reset_chunk_overlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize">reset_chunk_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel">reset_embedding_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled">reset_hybrid_search_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults">reset_max_num_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused">reset_paused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams">reset_public_endpoint_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking">reset_reranking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel">reset_reranking_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel">reset_rewrite_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery">reset_rewrite_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold">reset_score_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams">reset_source_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization">reset_summarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel">reset_summarization_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch">reset_system_prompt_aisearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization">reset_system_prompt_index_summarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery">reset_system_prompt_rewrite_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId">reset_token_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_metadata` <a name="put_custom_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata"></a>

```python
def put_custom_metadata(
  value: IResolvable | typing.List[AiSearchInstanceCustomMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata"></a>

```python
def put_metadata(
  created_from_aisearch_wizard: bool | IResolvable = None,
  worker_domain: str = None
) -> None
```

###### `created_from_aisearch_wizard`<sup>Optional</sup> <a name="created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.createdFromAisearchWizard"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

###### `worker_domain`<sup>Optional</sup> <a name="worker_domain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.workerDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

##### `put_public_endpoint_params` <a name="put_public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams"></a>

```python
def put_public_endpoint_params(
  authorized_hosts: typing.List[str] = None,
  chat_completions_endpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint = None,
  enabled: bool | IResolvable = None,
  mcp: AiSearchInstancePublicEndpointParamsMcp = None,
  rate_limit: AiSearchInstancePublicEndpointParamsRateLimit = None,
  search_endpoint: AiSearchInstancePublicEndpointParamsSearchEndpoint = None
) -> None
```

###### `authorized_hosts`<sup>Optional</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.authorizedHosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

###### `chat_completions_endpoint`<sup>Optional</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.chatCompletionsEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

###### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.mcp"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

###### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.rateLimit"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

###### `search_endpoint`<sup>Optional</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.searchEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

##### `put_source_params` <a name="put_source_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams"></a>

```python
def put_source_params(
  exclude_items: typing.List[str] = None,
  include_items: typing.List[str] = None,
  prefix: str = None,
  r2_jurisdiction: str = None,
  web_crawler: AiSearchInstanceSourceParamsWebCrawler = None
) -> None
```

###### `exclude_items`<sup>Optional</sup> <a name="exclude_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.excludeItems"></a>

- *Type:* typing.List[str]

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

###### `include_items`<sup>Optional</sup> <a name="include_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.includeItems"></a>

- *Type:* typing.List[str]

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

###### `r2_jurisdiction`<sup>Optional</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.r2Jurisdiction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

###### `web_crawler`<sup>Optional</sup> <a name="web_crawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.webCrawler"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

##### `reset_ai_gateway_id` <a name="reset_ai_gateway_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId"></a>

```python
def reset_ai_gateway_id() -> None
```

##### `reset_aisearch_model` <a name="reset_aisearch_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel"></a>

```python
def reset_aisearch_model() -> None
```

##### `reset_cache` <a name="reset_cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache"></a>

```python
def reset_cache() -> None
```

##### `reset_cache_threshold` <a name="reset_cache_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold"></a>

```python
def reset_cache_threshold() -> None
```

##### `reset_chunk` <a name="reset_chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk"></a>

```python
def reset_chunk() -> None
```

##### `reset_chunk_overlap` <a name="reset_chunk_overlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap"></a>

```python
def reset_chunk_overlap() -> None
```

##### `reset_chunk_size` <a name="reset_chunk_size" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize"></a>

```python
def reset_chunk_size() -> None
```

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_embedding_model` <a name="reset_embedding_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel"></a>

```python
def reset_embedding_model() -> None
```

##### `reset_hybrid_search_enabled` <a name="reset_hybrid_search_enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled"></a>

```python
def reset_hybrid_search_enabled() -> None
```

##### `reset_max_num_results` <a name="reset_max_num_results" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults"></a>

```python
def reset_max_num_results() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused"></a>

```python
def reset_paused() -> None
```

##### `reset_public_endpoint_params` <a name="reset_public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams"></a>

```python
def reset_public_endpoint_params() -> None
```

##### `reset_reranking` <a name="reset_reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking"></a>

```python
def reset_reranking() -> None
```

##### `reset_reranking_model` <a name="reset_reranking_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel"></a>

```python
def reset_reranking_model() -> None
```

##### `reset_rewrite_model` <a name="reset_rewrite_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel"></a>

```python
def reset_rewrite_model() -> None
```

##### `reset_rewrite_query` <a name="reset_rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery"></a>

```python
def reset_rewrite_query() -> None
```

##### `reset_score_threshold` <a name="reset_score_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold"></a>

```python
def reset_score_threshold() -> None
```

##### `reset_source_params` <a name="reset_source_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams"></a>

```python
def reset_source_params() -> None
```

##### `reset_summarization` <a name="reset_summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization"></a>

```python
def reset_summarization() -> None
```

##### `reset_summarization_model` <a name="reset_summarization_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel"></a>

```python
def reset_summarization_model() -> None
```

##### `reset_system_prompt_aisearch` <a name="reset_system_prompt_aisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch"></a>

```python
def reset_system_prompt_aisearch() -> None
```

##### `reset_system_prompt_index_summarization` <a name="reset_system_prompt_index_summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization"></a>

```python
def reset_system_prompt_index_summarization() -> None
```

##### `reset_system_prompt_rewrite_query` <a name="reset_system_prompt_rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery"></a>

```python
def reset_system_prompt_rewrite_query() -> None
```

##### `reset_token_id` <a name="reset_token_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId"></a>

```python
def reset_token_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstance.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiSearchInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion">engine_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity">last_activity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId">public_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams">source_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeActiveNamespace">vectorize_active_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName">vectorize_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput">ai_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput">aisearch_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput">cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput">cache_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput">chunk_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput">chunk_overlap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput">chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput">custom_metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput">embedding_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput">hybrid_search_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput">max_num_results_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput">paused_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput">public_endpoint_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput">reranking_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput">reranking_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput">rewrite_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput">rewrite_query_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput">score_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput">source_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput">summarization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput">summarization_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput">system_prompt_aisearch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput">system_prompt_index_summarization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput">system_prompt_rewrite_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput">token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId">ai_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel">aisearch_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache">cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold">cache_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk">chunk</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel">embedding_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled">hybrid_search_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults">max_num_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking">reranking</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel">reranking_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel">rewrite_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery">rewrite_query</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization">summarization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel">summarization_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch">system_prompt_aisearch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization">system_prompt_index_summarization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery">system_prompt_rewrite_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId">token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata"></a>

```python
custom_metadata: AiSearchInstanceCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion"></a>

```python
engine_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `last_activity`<sup>Required</sup> <a name="last_activity" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity"></a>

```python
last_activity: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata"></a>

```python
metadata: AiSearchInstanceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `public_endpoint_id`<sup>Required</sup> <a name="public_endpoint_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId"></a>

```python
public_endpoint_id: str
```

- *Type:* str

---

##### `public_endpoint_params`<sup>Required</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams"></a>

```python
public_endpoint_params: AiSearchInstancePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `source_params`<sup>Required</sup> <a name="source_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams"></a>

```python
source_params: AiSearchInstanceSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vectorize_active_namespace`<sup>Required</sup> <a name="vectorize_active_namespace" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeActiveNamespace"></a>

```python
vectorize_active_namespace: str
```

- *Type:* str

---

##### `vectorize_name`<sup>Required</sup> <a name="vectorize_name" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName"></a>

```python
vectorize_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `ai_gateway_id_input`<sup>Optional</sup> <a name="ai_gateway_id_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput"></a>

```python
ai_gateway_id_input: str
```

- *Type:* str

---

##### `aisearch_model_input`<sup>Optional</sup> <a name="aisearch_model_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput"></a>

```python
aisearch_model_input: str
```

- *Type:* str

---

##### `cache_input`<sup>Optional</sup> <a name="cache_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput"></a>

```python
cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_threshold_input`<sup>Optional</sup> <a name="cache_threshold_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput"></a>

```python
cache_threshold_input: str
```

- *Type:* str

---

##### `chunk_input`<sup>Optional</sup> <a name="chunk_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput"></a>

```python
chunk_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `chunk_overlap_input`<sup>Optional</sup> <a name="chunk_overlap_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput"></a>

```python
chunk_overlap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size_input`<sup>Optional</sup> <a name="chunk_size_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput"></a>

```python
chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput"></a>

```python
custom_metadata_input: IResolvable | typing.List[AiSearchInstanceCustomMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]

---

##### `embedding_model_input`<sup>Optional</sup> <a name="embedding_model_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput"></a>

```python
embedding_model_input: str
```

- *Type:* str

---

##### `hybrid_search_enabled_input`<sup>Optional</sup> <a name="hybrid_search_enabled_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput"></a>

```python
hybrid_search_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_num_results_input`<sup>Optional</sup> <a name="max_num_results_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput"></a>

```python
max_num_results_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput"></a>

```python
metadata_input: IResolvable | AiSearchInstanceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput"></a>

```python
paused_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `public_endpoint_params_input`<sup>Optional</sup> <a name="public_endpoint_params_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput"></a>

```python
public_endpoint_params_input: IResolvable | AiSearchInstancePublicEndpointParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `reranking_input`<sup>Optional</sup> <a name="reranking_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput"></a>

```python
reranking_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reranking_model_input`<sup>Optional</sup> <a name="reranking_model_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput"></a>

```python
reranking_model_input: str
```

- *Type:* str

---

##### `rewrite_model_input`<sup>Optional</sup> <a name="rewrite_model_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput"></a>

```python
rewrite_model_input: str
```

- *Type:* str

---

##### `rewrite_query_input`<sup>Optional</sup> <a name="rewrite_query_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput"></a>

```python
rewrite_query_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `score_threshold_input`<sup>Optional</sup> <a name="score_threshold_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput"></a>

```python
score_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_params_input`<sup>Optional</sup> <a name="source_params_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput"></a>

```python
source_params_input: IResolvable | AiSearchInstanceSourceParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `summarization_input`<sup>Optional</sup> <a name="summarization_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput"></a>

```python
summarization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `summarization_model_input`<sup>Optional</sup> <a name="summarization_model_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput"></a>

```python
summarization_model_input: str
```

- *Type:* str

---

##### `system_prompt_aisearch_input`<sup>Optional</sup> <a name="system_prompt_aisearch_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput"></a>

```python
system_prompt_aisearch_input: str
```

- *Type:* str

---

##### `system_prompt_index_summarization_input`<sup>Optional</sup> <a name="system_prompt_index_summarization_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput"></a>

```python
system_prompt_index_summarization_input: str
```

- *Type:* str

---

##### `system_prompt_rewrite_query_input`<sup>Optional</sup> <a name="system_prompt_rewrite_query_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput"></a>

```python
system_prompt_rewrite_query_input: str
```

- *Type:* str

---

##### `token_id_input`<sup>Optional</sup> <a name="token_id_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput"></a>

```python
token_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ai_gateway_id`<sup>Required</sup> <a name="ai_gateway_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId"></a>

```python
ai_gateway_id: str
```

- *Type:* str

---

##### `aisearch_model`<sup>Required</sup> <a name="aisearch_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel"></a>

```python
aisearch_model: str
```

- *Type:* str

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache"></a>

```python
cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_threshold`<sup>Required</sup> <a name="cache_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold"></a>

```python
cache_threshold: str
```

- *Type:* str

---

##### `chunk`<sup>Required</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk"></a>

```python
chunk: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `chunk_overlap`<sup>Required</sup> <a name="chunk_overlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

---

##### `hybrid_search_enabled`<sup>Required</sup> <a name="hybrid_search_enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled"></a>

```python
hybrid_search_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_num_results`<sup>Required</sup> <a name="max_num_results" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults"></a>

```python
max_num_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reranking`<sup>Required</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking"></a>

```python
reranking: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reranking_model`<sup>Required</sup> <a name="reranking_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel"></a>

```python
reranking_model: str
```

- *Type:* str

---

##### `rewrite_model`<sup>Required</sup> <a name="rewrite_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel"></a>

```python
rewrite_model: str
```

- *Type:* str

---

##### `rewrite_query`<sup>Required</sup> <a name="rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery"></a>

```python
rewrite_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `score_threshold`<sup>Required</sup> <a name="score_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization"></a>

```python
summarization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `summarization_model`<sup>Required</sup> <a name="summarization_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

---

##### `system_prompt_aisearch`<sup>Required</sup> <a name="system_prompt_aisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch"></a>

```python
system_prompt_aisearch: str
```

- *Type:* str

---

##### `system_prompt_index_summarization`<sup>Required</sup> <a name="system_prompt_index_summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization"></a>

```python
system_prompt_index_summarization: str
```

- *Type:* str

---

##### `system_prompt_rewrite_query`<sup>Required</sup> <a name="system_prompt_rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery"></a>

```python
system_prompt_rewrite_query: str
```

- *Type:* str

---

##### `token_id`<sup>Required</sup> <a name="token_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchInstanceConfig <a name="AiSearchInstanceConfig" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  id: str,
  source: str,
  type: str,
  ai_gateway_id: str = None,
  aisearch_model: str = None,
  cache: bool | IResolvable = None,
  cache_threshold: str = None,
  chunk: bool | IResolvable = None,
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None,
  custom_metadata: IResolvable | typing.List[AiSearchInstanceCustomMetadata] = None,
  embedding_model: str = None,
  hybrid_search_enabled: bool | IResolvable = None,
  max_num_results: typing.Union[int, float] = None,
  metadata: AiSearchInstanceMetadata = None,
  paused: bool | IResolvable = None,
  public_endpoint_params: AiSearchInstancePublicEndpointParams = None,
  reranking: bool | IResolvable = None,
  reranking_model: str = None,
  rewrite_model: str = None,
  rewrite_query: bool | IResolvable = None,
  score_threshold: typing.Union[int, float] = None,
  source_params: AiSearchInstanceSourceParams = None,
  summarization: bool | IResolvable = None,
  summarization_model: str = None,
  system_prompt_aisearch: str = None,
  system_prompt_index_summarization: str = None,
  system_prompt_rewrite_query: str = None,
  token_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id">id</a></code> | <code>str</code> | Use your AI Search ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type">type</a></code> | <code>str</code> | Available values: "r2", "web-crawler". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId">ai_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel">aisearch_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache">cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold">cache_threshold</a></code> | <code>str</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk">chunk</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata">custom_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel">embedding_model</a></code> | <code>str</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled">hybrid_search_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults">max_num_results</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking">reranking</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel">reranking_model</a></code> | <code>str</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel">rewrite_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery">rewrite_query</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams">source_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization">summarization</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel">summarization_model</a></code> | <code>str</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch">system_prompt_aisearch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization">system_prompt_index_summarization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery">system_prompt_rewrite_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId">token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

##### `ai_gateway_id`<sup>Optional</sup> <a name="ai_gateway_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId"></a>

```python
ai_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `aisearch_model`<sup>Optional</sup> <a name="aisearch_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel"></a>

```python
aisearch_model: str
```

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache"></a>

```python
cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `cache_threshold`<sup>Optional</sup> <a name="cache_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold"></a>

```python
cache_threshold: str
```

- *Type:* str

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `chunk`<sup>Optional</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk"></a>

```python
chunk: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata"></a>

```python
custom_metadata: IResolvable | typing.List[AiSearchInstanceCustomMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `embedding_model`<sup>Optional</sup> <a name="embedding_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `hybrid_search_enabled`<sup>Optional</sup> <a name="hybrid_search_enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled"></a>

```python
hybrid_search_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}.

---

##### `max_num_results`<sup>Optional</sup> <a name="max_num_results" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults"></a>

```python
max_num_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata"></a>

```python
metadata: AiSearchInstanceMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `public_endpoint_params`<sup>Optional</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams"></a>

```python
public_endpoint_params: AiSearchInstancePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `reranking`<sup>Optional</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking"></a>

```python
reranking: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `reranking_model`<sup>Optional</sup> <a name="reranking_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel"></a>

```python
reranking_model: str
```

- *Type:* str

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `rewrite_model`<sup>Optional</sup> <a name="rewrite_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel"></a>

```python
rewrite_model: str
```

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `rewrite_query`<sup>Optional</sup> <a name="rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery"></a>

```python
rewrite_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `score_threshold`<sup>Optional</sup> <a name="score_threshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `source_params`<sup>Optional</sup> <a name="source_params" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams"></a>

```python
source_params: AiSearchInstanceSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization"></a>

```python
summarization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `system_prompt_aisearch`<sup>Optional</sup> <a name="system_prompt_aisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch"></a>

```python
system_prompt_aisearch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `system_prompt_index_summarization`<sup>Optional</sup> <a name="system_prompt_index_summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization"></a>

```python
system_prompt_index_summarization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `system_prompt_rewrite_query`<sup>Optional</sup> <a name="system_prompt_rewrite_query" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery"></a>

```python
system_prompt_rewrite_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `token_id`<sup>Optional</sup> <a name="token_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

### AiSearchInstanceCustomMetadata <a name="AiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceCustomMetadata(
  data_type: str,
  field_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType">data_type</a></code> | <code>str</code> | Available values: "text", "number", "boolean". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}. |

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Available values: "text", "number", "boolean".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}.

---

### AiSearchInstanceMetadata <a name="AiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceMetadata(
  created_from_aisearch_wizard: bool | IResolvable = None,
  worker_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard">created_from_aisearch_wizard</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain">worker_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}. |

---

##### `created_from_aisearch_wizard`<sup>Optional</sup> <a name="created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard"></a>

```python
created_from_aisearch_wizard: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

##### `worker_domain`<sup>Optional</sup> <a name="worker_domain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain"></a>

```python
worker_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

### AiSearchInstancePublicEndpointParams <a name="AiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParams(
  authorized_hosts: typing.List[str] = None,
  chat_completions_endpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint = None,
  enabled: bool | IResolvable = None,
  mcp: AiSearchInstancePublicEndpointParamsMcp = None,
  rate_limit: AiSearchInstancePublicEndpointParamsRateLimit = None,
  search_endpoint: AiSearchInstancePublicEndpointParamsSearchEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}. |

---

##### `authorized_hosts`<sup>Optional</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

##### `chat_completions_endpoint`<sup>Optional</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp"></a>

```python
mcp: AiSearchInstancePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit"></a>

```python
rate_limit: AiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

##### `search_endpoint`<sup>Optional</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint"></a>

```python
search_endpoint: AiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

### AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint(
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsMcp <a name="AiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp(
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable MCP endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsRateLimit <a name="AiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit(
  period_ms: typing.Union[int, float] = None,
  requests: typing.Union[int, float] = None,
  technique: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique">technique</a></code> | <code>str</code> | Available values: "fixed", "sliding". |

---

##### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique"></a>

```python
technique: str
```

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

### AiSearchInstancePublicEndpointParamsSearchEndpoint <a name="AiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint(
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable search endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstanceSourceParams <a name="AiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParams(
  exclude_items: typing.List[str] = None,
  include_items: typing.List[str] = None,
  prefix: str = None,
  r2_jurisdiction: str = None,
  web_crawler: AiSearchInstanceSourceParamsWebCrawler = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems">exclude_items</a></code> | <code>typing.List[str]</code> | List of path patterns to exclude. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems">include_items</a></code> | <code>typing.List[str]</code> | List of path patterns to include. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler">web_crawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}. |

---

##### `exclude_items`<sup>Optional</sup> <a name="exclude_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems"></a>

```python
exclude_items: typing.List[str]
```

- *Type:* typing.List[str]

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

##### `include_items`<sup>Optional</sup> <a name="include_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems"></a>

```python
include_items: typing.List[str]
```

- *Type:* typing.List[str]

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

##### `r2_jurisdiction`<sup>Optional</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `web_crawler`<sup>Optional</sup> <a name="web_crawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler"></a>

```python
web_crawler: AiSearchInstanceSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

### AiSearchInstanceSourceParamsWebCrawler <a name="AiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler(
  parse_options: AiSearchInstanceSourceParamsWebCrawlerParseOptions = None,
  parse_type: str = None,
  store_options: AiSearchInstanceSourceParamsWebCrawlerStoreOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions">parse_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType">parse_type</a></code> | <code>str</code> | Available values: "sitemap", "feed-rss". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}. |

---

##### `parse_options`<sup>Optional</sup> <a name="parse_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions"></a>

```python
parse_options: AiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

##### `parse_type`<sup>Optional</sup> <a name="parse_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType"></a>

```python
parse_type: str
```

- *Type:* str

Available values: "sitemap", "feed-rss".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

##### `store_options`<sup>Optional</sup> <a name="store_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions"></a>

```python
store_options: AiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions(
  include_headers: typing.Mapping[str] = None,
  include_images: bool | IResolvable = None,
  specific_sitemaps: typing.List[str] = None,
  use_browser_rendering: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders">include_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages">include_images</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps">specific_sitemaps</a></code> | <code>typing.List[str]</code> | List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering">use_browser_rendering</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}. |

---

##### `include_headers`<sup>Optional</sup> <a name="include_headers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders"></a>

```python
include_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}.

---

##### `include_images`<sup>Optional</sup> <a name="include_images" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages"></a>

```python
include_images: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

##### `specific_sitemaps`<sup>Optional</sup> <a name="specific_sitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps"></a>

```python
specific_sitemaps: typing.List[str]
```

- *Type:* typing.List[str]

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

##### `use_browser_rendering`<sup>Optional</sup> <a name="use_browser_rendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering"></a>

```python
use_browser_rendering: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

### AiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions(
  storage_id: str,
  r2_jurisdiction: str = None,
  storage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId">storage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType">storage_type</a></code> | <code>str</code> | Available values: "r2". |

---

##### `storage_id`<sup>Required</sup> <a name="storage_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId"></a>

```python
storage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

##### `r2_jurisdiction`<sup>Optional</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchInstanceCustomMetadataList <a name="AiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceCustomMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiSearchInstanceCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiSearchInstanceCustomMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>]

---


### AiSearchInstanceCustomMetadataOutputReference <a name="AiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceCustomMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>

---


### AiSearchInstanceMetadataOutputReference <a name="AiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard">reset_created_from_aisearch_wizard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain">reset_worker_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_created_from_aisearch_wizard` <a name="reset_created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard"></a>

```python
def reset_created_from_aisearch_wizard() -> None
```

##### `reset_worker_domain` <a name="reset_worker_domain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain"></a>

```python
def reset_worker_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput">created_from_aisearch_wizard_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput">worker_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">created_from_aisearch_wizard</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain">worker_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_from_aisearch_wizard_input`<sup>Optional</sup> <a name="created_from_aisearch_wizard_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput"></a>

```python
created_from_aisearch_wizard_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `worker_domain_input`<sup>Optional</sup> <a name="worker_domain_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput"></a>

```python
worker_domain_input: str
```

- *Type:* str

---

##### `created_from_aisearch_wizard`<sup>Required</sup> <a name="created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```python
created_from_aisearch_wizard: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `worker_domain`<sup>Required</sup> <a name="worker_domain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```python
worker_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---


### AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### AiSearchInstancePublicEndpointParamsMcpOutputReference <a name="AiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstancePublicEndpointParamsMcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---


### AiSearchInstancePublicEndpointParamsOutputReference <a name="AiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint">put_chat_completions_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp">put_mcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit">put_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint">put_search_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts">reset_authorized_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint">reset_chat_completions_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp">reset_mcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit">reset_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint">reset_search_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chat_completions_endpoint` <a name="put_chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```python
def put_chat_completions_endpoint(
  disabled: bool | IResolvable = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

##### `put_mcp` <a name="put_mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp"></a>

```python
def put_mcp(
  disabled: bool | IResolvable = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

##### `put_rate_limit` <a name="put_rate_limit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit"></a>

```python
def put_rate_limit(
  period_ms: typing.Union[int, float] = None,
  requests: typing.Union[int, float] = None,
  technique: str = None
) -> None
```

###### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.periodMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.requests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

###### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.technique"></a>

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

##### `put_search_endpoint` <a name="put_search_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```python
def put_search_endpoint(
  disabled: bool | IResolvable = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

##### `reset_authorized_hosts` <a name="reset_authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```python
def reset_authorized_hosts() -> None
```

##### `reset_chat_completions_endpoint` <a name="reset_chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```python
def reset_chat_completions_endpoint() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_mcp` <a name="reset_mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp"></a>

```python
def reset_mcp() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```

##### `reset_search_endpoint` <a name="reset_search_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```python
def reset_search_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput">authorized_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">chat_completions_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput">mcp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput">search_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat_completions_endpoint`<sup>Required</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```python
mcp: AiSearchInstancePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```python
rate_limit: AiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `search_endpoint`<sup>Required</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```python
search_endpoint: AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `authorized_hosts_input`<sup>Optional</sup> <a name="authorized_hosts_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```python
authorized_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `chat_completions_endpoint_input`<sup>Optional</sup> <a name="chat_completions_endpoint_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```python
chat_completions_endpoint_input: IResolvable | AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mcp_input`<sup>Optional</sup> <a name="mcp_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput"></a>

```python
mcp_input: IResolvable | AiSearchInstancePublicEndpointParamsMcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: IResolvable | AiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `search_endpoint_input`<sup>Optional</sup> <a name="search_endpoint_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```python
search_endpoint_input: IResolvable | AiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `authorized_hosts`<sup>Required</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstancePublicEndpointParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---


### AiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="AiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs">reset_period_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period_ms` <a name="reset_period_ms" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```python
def reset_period_ms() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">period_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms_input`<sup>Optional</sup> <a name="period_ms_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```python
period_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---


### AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### AiSearchInstanceSourceParamsOutputReference <a name="AiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler">put_web_crawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems">reset_exclude_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems">reset_include_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction">reset_r2_jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler">reset_web_crawler</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_web_crawler` <a name="put_web_crawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler"></a>

```python
def put_web_crawler(
  parse_options: AiSearchInstanceSourceParamsWebCrawlerParseOptions = None,
  parse_type: str = None,
  store_options: AiSearchInstanceSourceParamsWebCrawlerStoreOptions = None
) -> None
```

###### `parse_options`<sup>Optional</sup> <a name="parse_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.parseOptions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

###### `parse_type`<sup>Optional</sup> <a name="parse_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.parseType"></a>

- *Type:* str

Available values: "sitemap", "feed-rss".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

###### `store_options`<sup>Optional</sup> <a name="store_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.storeOptions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

##### `reset_exclude_items` <a name="reset_exclude_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems"></a>

```python
def reset_exclude_items() -> None
```

##### `reset_include_items` <a name="reset_include_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems"></a>

```python
def reset_include_items() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_r2_jurisdiction` <a name="reset_r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction"></a>

```python
def reset_r2_jurisdiction() -> None
```

##### `reset_web_crawler` <a name="reset_web_crawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler"></a>

```python
def reset_web_crawler() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler">web_crawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput">exclude_items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput">include_items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput">r2_jurisdiction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput">web_crawler_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems">exclude_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems">include_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `web_crawler`<sup>Required</sup> <a name="web_crawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```python
web_crawler: AiSearchInstanceSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `exclude_items_input`<sup>Optional</sup> <a name="exclude_items_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput"></a>

```python
exclude_items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_items_input`<sup>Optional</sup> <a name="include_items_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput"></a>

```python
include_items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `r2_jurisdiction_input`<sup>Optional</sup> <a name="r2_jurisdiction_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput"></a>

```python
r2_jurisdiction_input: str
```

- *Type:* str

---

##### `web_crawler_input`<sup>Optional</sup> <a name="web_crawler_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput"></a>

```python
web_crawler_input: IResolvable | AiSearchInstanceSourceParamsWebCrawler
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `exclude_items`<sup>Required</sup> <a name="exclude_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```python
exclude_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_items`<sup>Required</sup> <a name="include_items" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```python
include_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceSourceParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---


### AiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions">put_parse_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions">put_store_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions">reset_parse_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType">reset_parse_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions">reset_store_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parse_options` <a name="put_parse_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions"></a>

```python
def put_parse_options(
  include_headers: typing.Mapping[str] = None,
  include_images: bool | IResolvable = None,
  specific_sitemaps: typing.List[str] = None,
  use_browser_rendering: bool | IResolvable = None
) -> None
```

###### `include_headers`<sup>Optional</sup> <a name="include_headers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.includeHeaders"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}.

---

###### `include_images`<sup>Optional</sup> <a name="include_images" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.includeImages"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

###### `specific_sitemaps`<sup>Optional</sup> <a name="specific_sitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.specificSitemaps"></a>

- *Type:* typing.List[str]

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

###### `use_browser_rendering`<sup>Optional</sup> <a name="use_browser_rendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.useBrowserRendering"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

##### `put_store_options` <a name="put_store_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions"></a>

```python
def put_store_options(
  storage_id: str,
  r2_jurisdiction: str = None,
  storage_type: str = None
) -> None
```

###### `storage_id`<sup>Required</sup> <a name="storage_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.storageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

###### `r2_jurisdiction`<sup>Optional</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.r2Jurisdiction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

###### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.storageType"></a>

- *Type:* str

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

##### `reset_parse_options` <a name="reset_parse_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions"></a>

```python
def reset_parse_options() -> None
```

##### `reset_parse_type` <a name="reset_parse_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType"></a>

```python
def reset_parse_type() -> None
```

##### `reset_store_options` <a name="reset_store_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions"></a>

```python
def reset_store_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">parse_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput">parse_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput">parse_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput">store_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">parse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parse_options`<sup>Required</sup> <a name="parse_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```python
parse_options: AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `store_options`<sup>Required</sup> <a name="store_options" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```python
store_options: AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `parse_options_input`<sup>Optional</sup> <a name="parse_options_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput"></a>

```python
parse_options_input: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `parse_type_input`<sup>Optional</sup> <a name="parse_type_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput"></a>

```python
parse_type_input: str
```

- *Type:* str

---

##### `store_options_input`<sup>Optional</sup> <a name="store_options_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput"></a>

```python
store_options_input: IResolvable | AiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `parse_type`<sup>Required</sup> <a name="parse_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```python
parse_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceSourceParamsWebCrawler
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders">reset_include_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages">reset_include_images</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps">reset_specific_sitemaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering">reset_use_browser_rendering</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_headers` <a name="reset_include_headers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders"></a>

```python
def reset_include_headers() -> None
```

##### `reset_include_images` <a name="reset_include_images" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages"></a>

```python
def reset_include_images() -> None
```

##### `reset_specific_sitemaps` <a name="reset_specific_sitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps"></a>

```python
def reset_specific_sitemaps() -> None
```

##### `reset_use_browser_rendering` <a name="reset_use_browser_rendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering"></a>

```python
def reset_use_browser_rendering() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput">include_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput">include_images_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput">specific_sitemaps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput">use_browser_rendering_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">include_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">include_images</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">specific_sitemaps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">use_browser_rendering</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_headers_input`<sup>Optional</sup> <a name="include_headers_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput"></a>

```python
include_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_images_input`<sup>Optional</sup> <a name="include_images_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput"></a>

```python
include_images_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `specific_sitemaps_input`<sup>Optional</sup> <a name="specific_sitemaps_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput"></a>

```python
specific_sitemaps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_browser_rendering_input`<sup>Optional</sup> <a name="use_browser_rendering_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput"></a>

```python
use_browser_rendering_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_headers`<sup>Required</sup> <a name="include_headers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```python
include_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_images`<sup>Required</sup> <a name="include_images" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```python
include_images: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `specific_sitemaps`<sup>Required</sup> <a name="specific_sitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```python
specific_sitemaps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_browser_rendering`<sup>Required</sup> <a name="use_browser_rendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```python
use_browser_rendering: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_search_instance

aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction">reset_r2_jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_r2_jurisdiction` <a name="reset_r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction"></a>

```python
def reset_r2_jurisdiction() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput">r2_jurisdiction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput">storage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">storage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `r2_jurisdiction_input`<sup>Optional</sup> <a name="r2_jurisdiction_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput"></a>

```python
r2_jurisdiction_input: str
```

- *Type:* str

---

##### `storage_id_input`<sup>Optional</sup> <a name="storage_id_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput"></a>

```python
storage_id_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `storage_id`<sup>Required</sup> <a name="storage_id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```python
storage_id: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---



