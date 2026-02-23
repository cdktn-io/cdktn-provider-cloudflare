# `aiSearchInstance` Submodule <a name="`aiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.aiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchInstance <a name="AiSearchInstance" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstance(scope Construct, id *string, config AiSearchInstanceConfig) AiSearchInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig">AiSearchInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig">AiSearchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata">PutCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams">PutPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams">PutSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId">ResetAiGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel">ResetAisearchModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold">ResetCacheThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk">ResetChunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap">ResetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize">ResetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel">ResetEmbeddingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled">ResetHybridSearchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults">ResetMaxNumResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams">ResetPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking">ResetReranking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel">ResetRerankingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel">ResetRewriteModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery">ResetRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold">ResetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams">ResetSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization">ResetSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel">ResetSummarizationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch">ResetSystemPromptAisearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization">ResetSystemPromptIndexSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery">ResetSystemPromptRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId">ResetTokenId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetadata` <a name="PutCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata"></a>

```go
func PutCustomMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata"></a>

```go
func PutMetadata(value AiSearchInstanceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `PutPublicEndpointParams` <a name="PutPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams"></a>

```go
func PutPublicEndpointParams(value AiSearchInstancePublicEndpointParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `PutSourceParams` <a name="PutSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams"></a>

```go
func PutSourceParams(value AiSearchInstanceSourceParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `ResetAiGatewayId` <a name="ResetAiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId"></a>

```go
func ResetAiGatewayId()
```

##### `ResetAisearchModel` <a name="ResetAisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel"></a>

```go
func ResetAisearchModel()
```

##### `ResetCache` <a name="ResetCache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache"></a>

```go
func ResetCache()
```

##### `ResetCacheThreshold` <a name="ResetCacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold"></a>

```go
func ResetCacheThreshold()
```

##### `ResetChunk` <a name="ResetChunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk"></a>

```go
func ResetChunk()
```

##### `ResetChunkOverlap` <a name="ResetChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap"></a>

```go
func ResetChunkOverlap()
```

##### `ResetChunkSize` <a name="ResetChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize"></a>

```go
func ResetChunkSize()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetEmbeddingModel` <a name="ResetEmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel"></a>

```go
func ResetEmbeddingModel()
```

##### `ResetHybridSearchEnabled` <a name="ResetHybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled"></a>

```go
func ResetHybridSearchEnabled()
```

##### `ResetMaxNumResults` <a name="ResetMaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults"></a>

```go
func ResetMaxNumResults()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetPublicEndpointParams` <a name="ResetPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams"></a>

```go
func ResetPublicEndpointParams()
```

##### `ResetReranking` <a name="ResetReranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking"></a>

```go
func ResetReranking()
```

##### `ResetRerankingModel` <a name="ResetRerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel"></a>

```go
func ResetRerankingModel()
```

##### `ResetRewriteModel` <a name="ResetRewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel"></a>

```go
func ResetRewriteModel()
```

##### `ResetRewriteQuery` <a name="ResetRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery"></a>

```go
func ResetRewriteQuery()
```

##### `ResetScoreThreshold` <a name="ResetScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold"></a>

```go
func ResetScoreThreshold()
```

##### `ResetSourceParams` <a name="ResetSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams"></a>

```go
func ResetSourceParams()
```

##### `ResetSummarization` <a name="ResetSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization"></a>

```go
func ResetSummarization()
```

##### `ResetSummarizationModel` <a name="ResetSummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel"></a>

```go
func ResetSummarizationModel()
```

##### `ResetSystemPromptAisearch` <a name="ResetSystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch"></a>

```go
func ResetSystemPromptAisearch()
```

##### `ResetSystemPromptIndexSummarization` <a name="ResetSystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization"></a>

```go
func ResetSystemPromptIndexSummarization()
```

##### `ResetSystemPromptRewriteQuery` <a name="ResetSystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery"></a>

```go
func ResetSystemPromptRewriteQuery()
```

##### `ResetTokenId` <a name="ResetTokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId"></a>

```go
func ResetTokenId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.AiSearchInstance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.AiSearchInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.AiSearchInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.AiSearchInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiSearchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountTag">AccountTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion">EngineVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity">LastActivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId">PublicEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeActiveNamespace">VectorizeActiveNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName">VectorizeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput">AiGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput">AisearchModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput">CacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput">CacheThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput">ChunkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput">ChunkOverlapInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput">ChunkSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput">CustomMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput">EmbeddingModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput">HybridSearchEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput">MaxNumResultsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput">PublicEndpointParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput">RerankingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput">RerankingModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput">RewriteModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput">RewriteQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput">ScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput">SourceParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput">SummarizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput">SummarizationModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput">SystemPromptAisearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput">SystemPromptIndexSummarizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput">SystemPromptRewriteQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput">TokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId">AiGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel">AisearchModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache">Cache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold">CacheThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk">Chunk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap">ChunkOverlap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize">ChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel">EmbeddingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults">MaxNumResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking">Reranking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel">RerankingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel">RewriteModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery">RewriteQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization">Summarization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel">SummarizationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch">SystemPromptAisearch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization">SystemPromptIndexSummarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery">SystemPromptRewriteQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountTag"></a>

```go
func AccountTag() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata"></a>

```go
func CustomMetadata() AiSearchInstanceCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion"></a>

```go
func EngineVersion() *f64
```

- *Type:* *f64

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LastActivity`<sup>Required</sup> <a name="LastActivity" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity"></a>

```go
func LastActivity() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata"></a>

```go
func Metadata() AiSearchInstanceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId"></a>

```go
func PublicEndpointId() *string
```

- *Type:* *string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams"></a>

```go
func PublicEndpointParams() AiSearchInstancePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `SourceParams`<sup>Required</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams"></a>

```go
func SourceParams() AiSearchInstanceSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VectorizeActiveNamespace`<sup>Required</sup> <a name="VectorizeActiveNamespace" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeActiveNamespace"></a>

```go
func VectorizeActiveNamespace() *string
```

- *Type:* *string

---

##### `VectorizeName`<sup>Required</sup> <a name="VectorizeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName"></a>

```go
func VectorizeName() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AiGatewayIdInput`<sup>Optional</sup> <a name="AiGatewayIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput"></a>

```go
func AiGatewayIdInput() *string
```

- *Type:* *string

---

##### `AisearchModelInput`<sup>Optional</sup> <a name="AisearchModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput"></a>

```go
func AisearchModelInput() *string
```

- *Type:* *string

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput"></a>

```go
func CacheInput() interface{}
```

- *Type:* interface{}

---

##### `CacheThresholdInput`<sup>Optional</sup> <a name="CacheThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput"></a>

```go
func CacheThresholdInput() *string
```

- *Type:* *string

---

##### `ChunkInput`<sup>Optional</sup> <a name="ChunkInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput"></a>

```go
func ChunkInput() interface{}
```

- *Type:* interface{}

---

##### `ChunkOverlapInput`<sup>Optional</sup> <a name="ChunkOverlapInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput"></a>

```go
func ChunkOverlapInput() *f64
```

- *Type:* *f64

---

##### `ChunkSizeInput`<sup>Optional</sup> <a name="ChunkSizeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput"></a>

```go
func ChunkSizeInput() *f64
```

- *Type:* *f64

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput"></a>

```go
func CustomMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingModelInput`<sup>Optional</sup> <a name="EmbeddingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput"></a>

```go
func EmbeddingModelInput() *string
```

- *Type:* *string

---

##### `HybridSearchEnabledInput`<sup>Optional</sup> <a name="HybridSearchEnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput"></a>

```go
func HybridSearchEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxNumResultsInput`<sup>Optional</sup> <a name="MaxNumResultsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput"></a>

```go
func MaxNumResultsInput() *f64
```

- *Type:* *f64

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `PublicEndpointParamsInput`<sup>Optional</sup> <a name="PublicEndpointParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput"></a>

```go
func PublicEndpointParamsInput() interface{}
```

- *Type:* interface{}

---

##### `RerankingInput`<sup>Optional</sup> <a name="RerankingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput"></a>

```go
func RerankingInput() interface{}
```

- *Type:* interface{}

---

##### `RerankingModelInput`<sup>Optional</sup> <a name="RerankingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput"></a>

```go
func RerankingModelInput() *string
```

- *Type:* *string

---

##### `RewriteModelInput`<sup>Optional</sup> <a name="RewriteModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput"></a>

```go
func RewriteModelInput() *string
```

- *Type:* *string

---

##### `RewriteQueryInput`<sup>Optional</sup> <a name="RewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput"></a>

```go
func RewriteQueryInput() interface{}
```

- *Type:* interface{}

---

##### `ScoreThresholdInput`<sup>Optional</sup> <a name="ScoreThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput"></a>

```go
func ScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceParamsInput`<sup>Optional</sup> <a name="SourceParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput"></a>

```go
func SourceParamsInput() interface{}
```

- *Type:* interface{}

---

##### `SummarizationInput`<sup>Optional</sup> <a name="SummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput"></a>

```go
func SummarizationInput() interface{}
```

- *Type:* interface{}

---

##### `SummarizationModelInput`<sup>Optional</sup> <a name="SummarizationModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput"></a>

```go
func SummarizationModelInput() *string
```

- *Type:* *string

---

##### `SystemPromptAisearchInput`<sup>Optional</sup> <a name="SystemPromptAisearchInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput"></a>

```go
func SystemPromptAisearchInput() *string
```

- *Type:* *string

---

##### `SystemPromptIndexSummarizationInput`<sup>Optional</sup> <a name="SystemPromptIndexSummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput"></a>

```go
func SystemPromptIndexSummarizationInput() *string
```

- *Type:* *string

---

##### `SystemPromptRewriteQueryInput`<sup>Optional</sup> <a name="SystemPromptRewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput"></a>

```go
func SystemPromptRewriteQueryInput() *string
```

- *Type:* *string

---

##### `TokenIdInput`<sup>Optional</sup> <a name="TokenIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput"></a>

```go
func TokenIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AiGatewayId`<sup>Required</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId"></a>

```go
func AiGatewayId() *string
```

- *Type:* *string

---

##### `AisearchModel`<sup>Required</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel"></a>

```go
func AisearchModel() *string
```

- *Type:* *string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache"></a>

```go
func Cache() interface{}
```

- *Type:* interface{}

---

##### `CacheThreshold`<sup>Required</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold"></a>

```go
func CacheThreshold() *string
```

- *Type:* *string

---

##### `Chunk`<sup>Required</sup> <a name="Chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk"></a>

```go
func Chunk() interface{}
```

- *Type:* interface{}

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap"></a>

```go
func ChunkOverlap() *f64
```

- *Type:* *f64

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize"></a>

```go
func ChunkSize() *f64
```

- *Type:* *f64

---

##### `EmbeddingModel`<sup>Required</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel"></a>

```go
func EmbeddingModel() *string
```

- *Type:* *string

---

##### `HybridSearchEnabled`<sup>Required</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled"></a>

```go
func HybridSearchEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxNumResults`<sup>Required</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults"></a>

```go
func MaxNumResults() *f64
```

- *Type:* *f64

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `Reranking`<sup>Required</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking"></a>

```go
func Reranking() interface{}
```

- *Type:* interface{}

---

##### `RerankingModel`<sup>Required</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel"></a>

```go
func RerankingModel() *string
```

- *Type:* *string

---

##### `RewriteModel`<sup>Required</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel"></a>

```go
func RewriteModel() *string
```

- *Type:* *string

---

##### `RewriteQuery`<sup>Required</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery"></a>

```go
func RewriteQuery() interface{}
```

- *Type:* interface{}

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization"></a>

```go
func Summarization() interface{}
```

- *Type:* interface{}

---

##### `SummarizationModel`<sup>Required</sup> <a name="SummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel"></a>

```go
func SummarizationModel() *string
```

- *Type:* *string

---

##### `SystemPromptAisearch`<sup>Required</sup> <a name="SystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch"></a>

```go
func SystemPromptAisearch() *string
```

- *Type:* *string

---

##### `SystemPromptIndexSummarization`<sup>Required</sup> <a name="SystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization"></a>

```go
func SystemPromptIndexSummarization() *string
```

- *Type:* *string

---

##### `SystemPromptRewriteQuery`<sup>Required</sup> <a name="SystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery"></a>

```go
func SystemPromptRewriteQuery() *string
```

- *Type:* *string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchInstanceConfig <a name="AiSearchInstanceConfig" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Id: *string,
	Source: *string,
	Type: *string,
	AiGatewayId: *string,
	AisearchModel: *string,
	Cache: interface{},
	CacheThreshold: *string,
	Chunk: interface{},
	ChunkOverlap: *f64,
	ChunkSize: *f64,
	CustomMetadata: interface{},
	EmbeddingModel: *string,
	HybridSearchEnabled: interface{},
	MaxNumResults: *f64,
	Metadata: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstanceMetadata,
	Paused: interface{},
	PublicEndpointParams: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstancePublicEndpointParams,
	Reranking: interface{},
	RerankingModel: *string,
	RewriteModel: *string,
	RewriteQuery: interface{},
	ScoreThreshold: *f64,
	SourceParams: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstanceSourceParams,
	Summarization: interface{},
	SummarizationModel: *string,
	SystemPromptAisearch: *string,
	SystemPromptIndexSummarization: *string,
	SystemPromptRewriteQuery: *string,
	TokenId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Use your AI Search ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type">Type</a></code> | <code>*string</code> | Available values: "r2", "web-crawler". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId">AiGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel">AisearchModel</a></code> | <code>*string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache">Cache</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold">CacheThreshold</a></code> | <code>*string</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk">Chunk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap">ChunkOverlap</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize">ChunkSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata">CustomMetadata</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel">EmbeddingModel</a></code> | <code>*string</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults">MaxNumResults</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking">Reranking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel">RerankingModel</a></code> | <code>*string</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel">RewriteModel</a></code> | <code>*string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery">RewriteQuery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization">Summarization</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel">SummarizationModel</a></code> | <code>*string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch">SystemPromptAisearch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization">SystemPromptIndexSummarization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery">SystemPromptRewriteQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId">TokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

##### `AiGatewayId`<sup>Optional</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId"></a>

```go
AiGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `AisearchModel`<sup>Optional</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel"></a>

```go
AisearchModel *string
```

- *Type:* *string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache"></a>

```go
Cache interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `CacheThreshold`<sup>Optional</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold"></a>

```go
CacheThreshold *string
```

- *Type:* *string

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `Chunk`<sup>Optional</sup> <a name="Chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk"></a>

```go
Chunk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `ChunkOverlap`<sup>Optional</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap"></a>

```go
ChunkOverlap *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `ChunkSize`<sup>Optional</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize"></a>

```go
ChunkSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata"></a>

```go
CustomMetadata interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `EmbeddingModel`<sup>Optional</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel"></a>

```go
EmbeddingModel *string
```

- *Type:* *string

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `HybridSearchEnabled`<sup>Optional</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled"></a>

```go
HybridSearchEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}.

---

##### `MaxNumResults`<sup>Optional</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults"></a>

```go
MaxNumResults *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata"></a>

```go
Metadata AiSearchInstanceMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `PublicEndpointParams`<sup>Optional</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams"></a>

```go
PublicEndpointParams AiSearchInstancePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `Reranking`<sup>Optional</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking"></a>

```go
Reranking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `RerankingModel`<sup>Optional</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel"></a>

```go
RerankingModel *string
```

- *Type:* *string

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `RewriteModel`<sup>Optional</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel"></a>

```go
RewriteModel *string
```

- *Type:* *string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `RewriteQuery`<sup>Optional</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery"></a>

```go
RewriteQuery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `ScoreThreshold`<sup>Optional</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold"></a>

```go
ScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `SourceParams`<sup>Optional</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams"></a>

```go
SourceParams AiSearchInstanceSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `Summarization`<sup>Optional</sup> <a name="Summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization"></a>

```go
Summarization interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `SummarizationModel`<sup>Optional</sup> <a name="SummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel"></a>

```go
SummarizationModel *string
```

- *Type:* *string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `SystemPromptAisearch`<sup>Optional</sup> <a name="SystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch"></a>

```go
SystemPromptAisearch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `SystemPromptIndexSummarization`<sup>Optional</sup> <a name="SystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization"></a>

```go
SystemPromptIndexSummarization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `SystemPromptRewriteQuery`<sup>Optional</sup> <a name="SystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery"></a>

```go
SystemPromptRewriteQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `TokenId`<sup>Optional</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId"></a>

```go
TokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

### AiSearchInstanceCustomMetadata <a name="AiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceCustomMetadata {
	DataType: *string,
	FieldName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType">DataType</a></code> | <code>*string</code> | Available values: "text", "number", "boolean". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}. |

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Available values: "text", "number", "boolean".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}.

---

### AiSearchInstanceMetadata <a name="AiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceMetadata {
	CreatedFromAisearchWizard: interface{},
	WorkerDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain">WorkerDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}. |

---

##### `CreatedFromAisearchWizard`<sup>Optional</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard"></a>

```go
CreatedFromAisearchWizard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

##### `WorkerDomain`<sup>Optional</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain"></a>

```go
WorkerDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

### AiSearchInstancePublicEndpointParams <a name="AiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstancePublicEndpointParams {
	AuthorizedHosts: *[]*string,
	ChatCompletionsEndpoint: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint,
	Enabled: interface{},
	Mcp: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp,
	RateLimit: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit,
	SearchEndpoint: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}. |

---

##### `AuthorizedHosts`<sup>Optional</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts"></a>

```go
AuthorizedHosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

##### `ChatCompletionsEndpoint`<sup>Optional</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```go
ChatCompletionsEndpoint AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

##### `Mcp`<sup>Optional</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp"></a>

```go
Mcp AiSearchInstancePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit"></a>

```go
RateLimit AiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

##### `SearchEndpoint`<sup>Optional</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint"></a>

```go
SearchEndpoint AiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

### AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsMcp <a name="AiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstancePublicEndpointParamsMcp {
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable MCP endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsRateLimit <a name="AiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstancePublicEndpointParamsRateLimit {
	PeriodMs: *f64,
	Requests: *f64,
	Technique: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique">Technique</a></code> | <code>*string</code> | Available values: "fixed", "sliding". |

---

##### `PeriodMs`<sup>Optional</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs"></a>

```go
PeriodMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique"></a>

```go
Technique *string
```

- *Type:* *string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

### AiSearchInstancePublicEndpointParamsSearchEndpoint <a name="AiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstancePublicEndpointParamsSearchEndpoint {
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disable search endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstanceSourceParams <a name="AiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceSourceParams {
	ExcludeItems: *[]*string,
	IncludeItems: *[]*string,
	Prefix: *string,
	R2Jurisdiction: *string,
	WebCrawler: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems">ExcludeItems</a></code> | <code>*[]*string</code> | List of path patterns to exclude. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems">IncludeItems</a></code> | <code>*[]*string</code> | List of path patterns to include. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}. |

---

##### `ExcludeItems`<sup>Optional</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems"></a>

```go
ExcludeItems *[]*string
```

- *Type:* *[]*string

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

##### `IncludeItems`<sup>Optional</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems"></a>

```go
IncludeItems *[]*string
```

- *Type:* *[]*string

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

##### `R2Jurisdiction`<sup>Optional</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction"></a>

```go
R2Jurisdiction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `WebCrawler`<sup>Optional</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler"></a>

```go
WebCrawler AiSearchInstanceSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

### AiSearchInstanceSourceParamsWebCrawler <a name="AiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceSourceParamsWebCrawler {
	ParseOptions: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions,
	ParseType: *string,
	StoreOptions: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType">ParseType</a></code> | <code>*string</code> | Available values: "sitemap", "feed-rss". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}. |

---

##### `ParseOptions`<sup>Optional</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions"></a>

```go
ParseOptions AiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

##### `ParseType`<sup>Optional</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType"></a>

```go
ParseType *string
```

- *Type:* *string

Available values: "sitemap", "feed-rss".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

##### `StoreOptions`<sup>Optional</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions"></a>

```go
StoreOptions AiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions {
	IncludeHeaders: *map[string]*string,
	IncludeImages: interface{},
	SpecificSitemaps: *[]*string,
	UseBrowserRendering: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders">IncludeHeaders</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages">IncludeImages</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps">SpecificSitemaps</a></code> | <code>*[]*string</code> | List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}. |

---

##### `IncludeHeaders`<sup>Optional</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders"></a>

```go
IncludeHeaders *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}.

---

##### `IncludeImages`<sup>Optional</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages"></a>

```go
IncludeImages interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

##### `SpecificSitemaps`<sup>Optional</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps"></a>

```go
SpecificSitemaps *[]*string
```

- *Type:* *[]*string

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

##### `UseBrowserRendering`<sup>Optional</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering"></a>

```go
UseBrowserRendering interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

### AiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

&aisearchinstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions {
	StorageId: *string,
	R2Jurisdiction: *string,
	StorageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId">StorageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType">StorageType</a></code> | <code>*string</code> | Available values: "r2". |

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId"></a>

```go
StorageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

##### `R2Jurisdiction`<sup>Optional</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction"></a>

```go
R2Jurisdiction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchInstanceCustomMetadataList <a name="AiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceCustomMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiSearchInstanceCustomMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get"></a>

```go
func Get(index *f64) AiSearchInstanceCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceCustomMetadataOutputReference <a name="AiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceCustomMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiSearchInstanceCustomMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceMetadataOutputReference <a name="AiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstanceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard">ResetCreatedFromAisearchWizard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain">ResetWorkerDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreatedFromAisearchWizard` <a name="ResetCreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard"></a>

```go
func ResetCreatedFromAisearchWizard()
```

##### `ResetWorkerDomain` <a name="ResetWorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain"></a>

```go
func ResetWorkerDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput">CreatedFromAisearchWizardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput">WorkerDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain">WorkerDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedFromAisearchWizardInput`<sup>Optional</sup> <a name="CreatedFromAisearchWizardInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput"></a>

```go
func CreatedFromAisearchWizardInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerDomainInput`<sup>Optional</sup> <a name="WorkerDomainInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput"></a>

```go
func WorkerDomainInput() *string
```

- *Type:* *string

---

##### `CreatedFromAisearchWizard`<sup>Required</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```go
func CreatedFromAisearchWizard() interface{}
```

- *Type:* interface{}

---

##### `WorkerDomain`<sup>Required</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```go
func WorkerDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstancePublicEndpointParamsMcpOutputReference <a name="AiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstancePublicEndpointParamsMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstancePublicEndpointParamsMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstancePublicEndpointParamsOutputReference <a name="AiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstancePublicEndpointParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstancePublicEndpointParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint">PutChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp">PutMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit">PutRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint">PutSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts">ResetAuthorizedHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint">ResetChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp">ResetMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint">ResetSearchEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChatCompletionsEndpoint` <a name="PutChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```go
func PutChatCompletionsEndpoint(value AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `PutMcp` <a name="PutMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp"></a>

```go
func PutMcp(value AiSearchInstancePublicEndpointParamsMcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `PutRateLimit` <a name="PutRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit"></a>

```go
func PutRateLimit(value AiSearchInstancePublicEndpointParamsRateLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `PutSearchEndpoint` <a name="PutSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```go
func PutSearchEndpoint(value AiSearchInstancePublicEndpointParamsSearchEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `ResetAuthorizedHosts` <a name="ResetAuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```go
func ResetAuthorizedHosts()
```

##### `ResetChatCompletionsEndpoint` <a name="ResetChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```go
func ResetChatCompletionsEndpoint()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMcp` <a name="ResetMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp"></a>

```go
func ResetMcp()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit"></a>

```go
func ResetRateLimit()
```

##### `ResetSearchEndpoint` <a name="ResetSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```go
func ResetSearchEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput">AuthorizedHostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">ChatCompletionsEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput">McpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput">SearchEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```go
func ChatCompletionsEndpoint() AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```go
func Mcp() AiSearchInstancePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```go
func RateLimit() AiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```go
func SearchEndpoint() AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `AuthorizedHostsInput`<sup>Optional</sup> <a name="AuthorizedHostsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```go
func AuthorizedHostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChatCompletionsEndpointInput`<sup>Optional</sup> <a name="ChatCompletionsEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```go
func ChatCompletionsEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `McpInput`<sup>Optional</sup> <a name="McpInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput"></a>

```go
func McpInput() interface{}
```

- *Type:* interface{}

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```go
func RateLimitInput() interface{}
```

- *Type:* interface{}

---

##### `SearchEndpointInput`<sup>Optional</sup> <a name="SearchEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```go
func SearchEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```go
func AuthorizedHosts() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="AiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstancePublicEndpointParamsRateLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs">ResetPeriodMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique">ResetTechnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodMs` <a name="ResetPeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```go
func ResetPeriodMs()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```go
func ResetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">PeriodMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodMsInput`<sup>Optional</sup> <a name="PeriodMsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```go
func PeriodMsInput() *f64
```

- *Type:* *f64

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```go
func TechniqueInput() *string
```

- *Type:* *string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```go
func PeriodMs() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```go
func Technique() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceSourceParamsOutputReference <a name="AiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceSourceParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstanceSourceParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler">PutWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems">ResetExcludeItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems">ResetIncludeItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction">ResetR2Jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler">ResetWebCrawler</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWebCrawler` <a name="PutWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler"></a>

```go
func PutWebCrawler(value AiSearchInstanceSourceParamsWebCrawler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `ResetExcludeItems` <a name="ResetExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems"></a>

```go
func ResetExcludeItems()
```

##### `ResetIncludeItems` <a name="ResetIncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems"></a>

```go
func ResetIncludeItems()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetR2Jurisdiction` <a name="ResetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction"></a>

```go
func ResetR2Jurisdiction()
```

##### `ResetWebCrawler` <a name="ResetWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler"></a>

```go
func ResetWebCrawler()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput">ExcludeItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput">IncludeItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput">R2JurisdictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput">WebCrawlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems">ExcludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems">IncludeItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WebCrawler`<sup>Required</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```go
func WebCrawler() AiSearchInstanceSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `ExcludeItemsInput`<sup>Optional</sup> <a name="ExcludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput"></a>

```go
func ExcludeItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeItemsInput`<sup>Optional</sup> <a name="IncludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput"></a>

```go
func IncludeItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `R2JurisdictionInput`<sup>Optional</sup> <a name="R2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput"></a>

```go
func R2JurisdictionInput() *string
```

- *Type:* *string

---

##### `WebCrawlerInput`<sup>Optional</sup> <a name="WebCrawlerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput"></a>

```go
func WebCrawlerInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeItems`<sup>Required</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```go
func ExcludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeItems`<sup>Required</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```go
func IncludeItems() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceSourceParamsWebCrawlerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstanceSourceParamsWebCrawlerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions">PutParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions">PutStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions">ResetParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType">ResetParseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions">ResetStoreOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParseOptions` <a name="PutParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions"></a>

```go
func PutParseOptions(value AiSearchInstanceSourceParamsWebCrawlerParseOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `PutStoreOptions` <a name="PutStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions"></a>

```go
func PutStoreOptions(value AiSearchInstanceSourceParamsWebCrawlerStoreOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `ResetParseOptions` <a name="ResetParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions"></a>

```go
func ResetParseOptions()
```

##### `ResetParseType` <a name="ResetParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType"></a>

```go
func ResetParseType()
```

##### `ResetStoreOptions` <a name="ResetStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions"></a>

```go
func ResetStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput">ParseOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput">ParseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput">StoreOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">ParseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParseOptions`<sup>Required</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```go
func ParseOptions() AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```go
func StoreOptions() AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `ParseOptionsInput`<sup>Optional</sup> <a name="ParseOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput"></a>

```go
func ParseOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ParseTypeInput`<sup>Optional</sup> <a name="ParseTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput"></a>

```go
func ParseTypeInput() *string
```

- *Type:* *string

---

##### `StoreOptionsInput`<sup>Optional</sup> <a name="StoreOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput"></a>

```go
func StoreOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ParseType`<sup>Required</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```go
func ParseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders">ResetIncludeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages">ResetIncludeImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps">ResetSpecificSitemaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering">ResetUseBrowserRendering</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHeaders` <a name="ResetIncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders"></a>

```go
func ResetIncludeHeaders()
```

##### `ResetIncludeImages` <a name="ResetIncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages"></a>

```go
func ResetIncludeImages()
```

##### `ResetSpecificSitemaps` <a name="ResetSpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps"></a>

```go
func ResetSpecificSitemaps()
```

##### `ResetUseBrowserRendering` <a name="ResetUseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering"></a>

```go
func ResetUseBrowserRendering()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput">IncludeHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput">IncludeImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput">SpecificSitemapsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput">UseBrowserRenderingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">IncludeHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">IncludeImages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">SpecificSitemaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHeadersInput`<sup>Optional</sup> <a name="IncludeHeadersInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput"></a>

```go
func IncludeHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeImagesInput`<sup>Optional</sup> <a name="IncludeImagesInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput"></a>

```go
func IncludeImagesInput() interface{}
```

- *Type:* interface{}

---

##### `SpecificSitemapsInput`<sup>Optional</sup> <a name="SpecificSitemapsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput"></a>

```go
func SpecificSitemapsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UseBrowserRenderingInput`<sup>Optional</sup> <a name="UseBrowserRenderingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput"></a>

```go
func UseBrowserRenderingInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeHeaders`<sup>Required</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```go
func IncludeHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeImages`<sup>Required</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```go
func IncludeImages() interface{}
```

- *Type:* interface{}

---

##### `SpecificSitemaps`<sup>Required</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```go
func SpecificSitemaps() *[]*string
```

- *Type:* *[]*string

---

##### `UseBrowserRendering`<sup>Required</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```go
func UseBrowserRendering() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/aisearchinstance"

aisearchinstance.NewAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction">ResetR2Jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetR2Jurisdiction` <a name="ResetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction"></a>

```go
func ResetR2Jurisdiction()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType"></a>

```go
func ResetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput">R2JurisdictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput">StorageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">StorageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `R2JurisdictionInput`<sup>Optional</sup> <a name="R2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput"></a>

```go
func R2JurisdictionInput() *string
```

- *Type:* *string

---

##### `StorageIdInput`<sup>Optional</sup> <a name="StorageIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput"></a>

```go
func StorageIdInput() *string
```

- *Type:* *string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```go
func R2Jurisdiction() *string
```

- *Type:* *string

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```go
func StorageId() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



