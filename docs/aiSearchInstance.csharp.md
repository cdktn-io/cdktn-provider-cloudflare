# `aiSearchInstance` Submodule <a name="`aiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.aiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchInstance <a name="AiSearchInstance" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstance(Construct Scope, string Id, AiSearchInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig">AiSearchInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions">PutIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod">PutIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams">PutPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions">PutRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams">PutSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId">ResetAiGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel">ResetAisearchModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold">ResetCacheThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheTtl">ResetCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk">ResetChunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap">ResetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize">ResetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel">ResetEmbeddingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetFusionMethod">ResetFusionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled">ResetHybridSearchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexingOptions">ResetIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexMethod">ResetIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults">ResetMaxNumResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams">ResetPublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking">ResetReranking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel">ResetRerankingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRetrievalOptions">ResetRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel">ResetRewriteModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery">ResetRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold">ResetScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams">ResetSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization">ResetSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel">ResetSummarizationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSyncInterval">ResetSyncInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch">ResetSystemPromptAisearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization">ResetSystemPromptIndexSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery">ResetSystemPromptRewriteQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId">ResetTokenId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetadata` <a name="PutCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata"></a>

```csharp
private void PutCustomMetadata(IResolvable|AiSearchInstanceCustomMetadata[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---

##### `PutIndexingOptions` <a name="PutIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions"></a>

```csharp
private void PutIndexingOptions(AiSearchInstanceIndexingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `PutIndexMethod` <a name="PutIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod"></a>

```csharp
private void PutIndexMethod(AiSearchInstanceIndexMethod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata"></a>

```csharp
private void PutMetadata(AiSearchInstanceMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `PutPublicEndpointParams` <a name="PutPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams"></a>

```csharp
private void PutPublicEndpointParams(AiSearchInstancePublicEndpointParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `PutRetrievalOptions` <a name="PutRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions"></a>

```csharp
private void PutRetrievalOptions(AiSearchInstanceRetrievalOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `PutSourceParams` <a name="PutSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams"></a>

```csharp
private void PutSourceParams(AiSearchInstanceSourceParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `ResetAiGatewayId` <a name="ResetAiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId"></a>

```csharp
private void ResetAiGatewayId()
```

##### `ResetAisearchModel` <a name="ResetAisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel"></a>

```csharp
private void ResetAisearchModel()
```

##### `ResetCache` <a name="ResetCache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache"></a>

```csharp
private void ResetCache()
```

##### `ResetCacheThreshold` <a name="ResetCacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold"></a>

```csharp
private void ResetCacheThreshold()
```

##### `ResetCacheTtl` <a name="ResetCacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheTtl"></a>

```csharp
private void ResetCacheTtl()
```

##### `ResetChunk` <a name="ResetChunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk"></a>

```csharp
private void ResetChunk()
```

##### `ResetChunkOverlap` <a name="ResetChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap"></a>

```csharp
private void ResetChunkOverlap()
```

##### `ResetChunkSize` <a name="ResetChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize"></a>

```csharp
private void ResetChunkSize()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetEmbeddingModel` <a name="ResetEmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel"></a>

```csharp
private void ResetEmbeddingModel()
```

##### `ResetFusionMethod` <a name="ResetFusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetFusionMethod"></a>

```csharp
private void ResetFusionMethod()
```

##### `ResetHybridSearchEnabled` <a name="ResetHybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled"></a>

```csharp
private void ResetHybridSearchEnabled()
```

##### `ResetIndexingOptions` <a name="ResetIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexingOptions"></a>

```csharp
private void ResetIndexingOptions()
```

##### `ResetIndexMethod` <a name="ResetIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexMethod"></a>

```csharp
private void ResetIndexMethod()
```

##### `ResetMaxNumResults` <a name="ResetMaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults"></a>

```csharp
private void ResetMaxNumResults()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetPublicEndpointParams` <a name="ResetPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams"></a>

```csharp
private void ResetPublicEndpointParams()
```

##### `ResetReranking` <a name="ResetReranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking"></a>

```csharp
private void ResetReranking()
```

##### `ResetRerankingModel` <a name="ResetRerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel"></a>

```csharp
private void ResetRerankingModel()
```

##### `ResetRetrievalOptions` <a name="ResetRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRetrievalOptions"></a>

```csharp
private void ResetRetrievalOptions()
```

##### `ResetRewriteModel` <a name="ResetRewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel"></a>

```csharp
private void ResetRewriteModel()
```

##### `ResetRewriteQuery` <a name="ResetRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery"></a>

```csharp
private void ResetRewriteQuery()
```

##### `ResetScoreThreshold` <a name="ResetScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold"></a>

```csharp
private void ResetScoreThreshold()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceParams` <a name="ResetSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams"></a>

```csharp
private void ResetSourceParams()
```

##### `ResetSummarization` <a name="ResetSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization"></a>

```csharp
private void ResetSummarization()
```

##### `ResetSummarizationModel` <a name="ResetSummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel"></a>

```csharp
private void ResetSummarizationModel()
```

##### `ResetSyncInterval` <a name="ResetSyncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSyncInterval"></a>

```csharp
private void ResetSyncInterval()
```

##### `ResetSystemPromptAisearch` <a name="ResetSystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch"></a>

```csharp
private void ResetSystemPromptAisearch()
```

##### `ResetSystemPromptIndexSummarization` <a name="ResetSystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization"></a>

```csharp
private void ResetSystemPromptIndexSummarization()
```

##### `ResetSystemPromptRewriteQuery` <a name="ResetSystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery"></a>

```csharp
private void ResetSystemPromptRewriteQuery()
```

##### `ResetTokenId` <a name="ResetTokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId"></a>

```csharp
private void ResetTokenId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetType"></a>

```csharp
private void ResetType()
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

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiSearchInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiSearchInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiSearchInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiSearchInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable">Enable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion">EngineVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions">IndexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod">IndexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity">LastActivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId">PublicEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions">RetrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName">VectorizeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput">AiGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput">AisearchModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput">CacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput">CacheThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput">CacheTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput">ChunkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput">ChunkOverlapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput">ChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput">CustomMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput">EmbeddingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput">FusionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput">HybridSearchEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput">IndexingOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput">IndexMethodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput">MaxNumResultsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput">PausedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput">PublicEndpointParamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput">RerankingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput">RerankingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput">RetrievalOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput">RewriteModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput">RewriteQueryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput">ScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput">SourceParamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput">SummarizationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput">SummarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput">SyncIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput">SystemPromptAisearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput">SystemPromptIndexSummarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput">SystemPromptRewriteQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput">TokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId">AiGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel">AisearchModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache">Cache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold">CacheThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl">CacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk">Chunk</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize">ChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel">EmbeddingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod">FusionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults">MaxNumResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused">Paused</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking">Reranking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel">RerankingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel">RewriteModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery">RewriteQuery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold">ScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization">Summarization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval">SyncInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch">SystemPromptAisearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization">SystemPromptIndexSummarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery">SystemPromptRewriteQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId">TokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata"></a>

```csharp
public AiSearchInstanceCustomMetadataList CustomMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion"></a>

```csharp
public double EngineVersion { get; }
```

- *Type:* double

---

##### `IndexingOptions`<sup>Required</sup> <a name="IndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions"></a>

```csharp
public AiSearchInstanceIndexingOptionsOutputReference IndexingOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a>

---

##### `IndexMethod`<sup>Required</sup> <a name="IndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod"></a>

```csharp
public AiSearchInstanceIndexMethodOutputReference IndexMethod { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a>

---

##### `LastActivity`<sup>Required</sup> <a name="LastActivity" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity"></a>

```csharp
public string LastActivity { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata"></a>

```csharp
public AiSearchInstanceMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PublicEndpointId`<sup>Required</sup> <a name="PublicEndpointId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId"></a>

```csharp
public string PublicEndpointId { get; }
```

- *Type:* string

---

##### `PublicEndpointParams`<sup>Required</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams"></a>

```csharp
public AiSearchInstancePublicEndpointParamsOutputReference PublicEndpointParams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `RetrievalOptions`<sup>Required</sup> <a name="RetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions"></a>

```csharp
public AiSearchInstanceRetrievalOptionsOutputReference RetrievalOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `SourceParams`<sup>Required</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams"></a>

```csharp
public AiSearchInstanceSourceParamsOutputReference SourceParams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VectorizeName`<sup>Required</sup> <a name="VectorizeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName"></a>

```csharp
public string VectorizeName { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AiGatewayIdInput`<sup>Optional</sup> <a name="AiGatewayIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput"></a>

```csharp
public string AiGatewayIdInput { get; }
```

- *Type:* string

---

##### `AisearchModelInput`<sup>Optional</sup> <a name="AisearchModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput"></a>

```csharp
public string AisearchModelInput { get; }
```

- *Type:* string

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput"></a>

```csharp
public bool|IResolvable CacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheThresholdInput`<sup>Optional</sup> <a name="CacheThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput"></a>

```csharp
public string CacheThresholdInput { get; }
```

- *Type:* string

---

##### `CacheTtlInput`<sup>Optional</sup> <a name="CacheTtlInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput"></a>

```csharp
public double CacheTtlInput { get; }
```

- *Type:* double

---

##### `ChunkInput`<sup>Optional</sup> <a name="ChunkInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput"></a>

```csharp
public bool|IResolvable ChunkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChunkOverlapInput`<sup>Optional</sup> <a name="ChunkOverlapInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput"></a>

```csharp
public double ChunkOverlapInput { get; }
```

- *Type:* double

---

##### `ChunkSizeInput`<sup>Optional</sup> <a name="ChunkSizeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput"></a>

```csharp
public double ChunkSizeInput { get; }
```

- *Type:* double

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput"></a>

```csharp
public IResolvable|AiSearchInstanceCustomMetadata[] CustomMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---

##### `EmbeddingModelInput`<sup>Optional</sup> <a name="EmbeddingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput"></a>

```csharp
public string EmbeddingModelInput { get; }
```

- *Type:* string

---

##### `FusionMethodInput`<sup>Optional</sup> <a name="FusionMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput"></a>

```csharp
public string FusionMethodInput { get; }
```

- *Type:* string

---

##### `HybridSearchEnabledInput`<sup>Optional</sup> <a name="HybridSearchEnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput"></a>

```csharp
public bool|IResolvable HybridSearchEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexingOptionsInput`<sup>Optional</sup> <a name="IndexingOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput"></a>

```csharp
public IResolvable|AiSearchInstanceIndexingOptions IndexingOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `IndexMethodInput`<sup>Optional</sup> <a name="IndexMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput"></a>

```csharp
public IResolvable|AiSearchInstanceIndexMethod IndexMethodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `MaxNumResultsInput`<sup>Optional</sup> <a name="MaxNumResultsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput"></a>

```csharp
public double MaxNumResultsInput { get; }
```

- *Type:* double

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput"></a>

```csharp
public IResolvable|AiSearchInstanceMetadata MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput"></a>

```csharp
public bool|IResolvable PausedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublicEndpointParamsInput`<sup>Optional</sup> <a name="PublicEndpointParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParams PublicEndpointParamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `RerankingInput`<sup>Optional</sup> <a name="RerankingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput"></a>

```csharp
public bool|IResolvable RerankingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RerankingModelInput`<sup>Optional</sup> <a name="RerankingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput"></a>

```csharp
public string RerankingModelInput { get; }
```

- *Type:* string

---

##### `RetrievalOptionsInput`<sup>Optional</sup> <a name="RetrievalOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptions RetrievalOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `RewriteModelInput`<sup>Optional</sup> <a name="RewriteModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput"></a>

```csharp
public string RewriteModelInput { get; }
```

- *Type:* string

---

##### `RewriteQueryInput`<sup>Optional</sup> <a name="RewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput"></a>

```csharp
public bool|IResolvable RewriteQueryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScoreThresholdInput`<sup>Optional</sup> <a name="ScoreThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput"></a>

```csharp
public double ScoreThresholdInput { get; }
```

- *Type:* double

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceParamsInput`<sup>Optional</sup> <a name="SourceParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParams SourceParamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `SummarizationInput`<sup>Optional</sup> <a name="SummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput"></a>

```csharp
public bool|IResolvable SummarizationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SummarizationModelInput`<sup>Optional</sup> <a name="SummarizationModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput"></a>

```csharp
public string SummarizationModelInput { get; }
```

- *Type:* string

---

##### `SyncIntervalInput`<sup>Optional</sup> <a name="SyncIntervalInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput"></a>

```csharp
public double SyncIntervalInput { get; }
```

- *Type:* double

---

##### `SystemPromptAisearchInput`<sup>Optional</sup> <a name="SystemPromptAisearchInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput"></a>

```csharp
public string SystemPromptAisearchInput { get; }
```

- *Type:* string

---

##### `SystemPromptIndexSummarizationInput`<sup>Optional</sup> <a name="SystemPromptIndexSummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput"></a>

```csharp
public string SystemPromptIndexSummarizationInput { get; }
```

- *Type:* string

---

##### `SystemPromptRewriteQueryInput`<sup>Optional</sup> <a name="SystemPromptRewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput"></a>

```csharp
public string SystemPromptRewriteQueryInput { get; }
```

- *Type:* string

---

##### `TokenIdInput`<sup>Optional</sup> <a name="TokenIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput"></a>

```csharp
public string TokenIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AiGatewayId`<sup>Required</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId"></a>

```csharp
public string AiGatewayId { get; }
```

- *Type:* string

---

##### `AisearchModel`<sup>Required</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel"></a>

```csharp
public string AisearchModel { get; }
```

- *Type:* string

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache"></a>

```csharp
public bool|IResolvable Cache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheThreshold`<sup>Required</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold"></a>

```csharp
public string CacheThreshold { get; }
```

- *Type:* string

---

##### `CacheTtl`<sup>Required</sup> <a name="CacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl"></a>

```csharp
public double CacheTtl { get; }
```

- *Type:* double

---

##### `Chunk`<sup>Required</sup> <a name="Chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk"></a>

```csharp
public bool|IResolvable Chunk { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; }
```

- *Type:* double

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize"></a>

```csharp
public double ChunkSize { get; }
```

- *Type:* double

---

##### `EmbeddingModel`<sup>Required</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel"></a>

```csharp
public string EmbeddingModel { get; }
```

- *Type:* string

---

##### `FusionMethod`<sup>Required</sup> <a name="FusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod"></a>

```csharp
public string FusionMethod { get; }
```

- *Type:* string

---

##### `HybridSearchEnabled`<sup>Required</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled"></a>

```csharp
public bool|IResolvable HybridSearchEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxNumResults`<sup>Required</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults"></a>

```csharp
public double MaxNumResults { get; }
```

- *Type:* double

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused"></a>

```csharp
public bool|IResolvable Paused { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Reranking`<sup>Required</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking"></a>

```csharp
public bool|IResolvable Reranking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RerankingModel`<sup>Required</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel"></a>

```csharp
public string RerankingModel { get; }
```

- *Type:* string

---

##### `RewriteModel`<sup>Required</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel"></a>

```csharp
public string RewriteModel { get; }
```

- *Type:* string

---

##### `RewriteQuery`<sup>Required</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery"></a>

```csharp
public bool|IResolvable RewriteQuery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold"></a>

```csharp
public double ScoreThreshold { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization"></a>

```csharp
public bool|IResolvable Summarization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SummarizationModel`<sup>Required</sup> <a name="SummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; }
```

- *Type:* string

---

##### `SyncInterval`<sup>Required</sup> <a name="SyncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval"></a>

```csharp
public double SyncInterval { get; }
```

- *Type:* double

---

##### `SystemPromptAisearch`<sup>Required</sup> <a name="SystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch"></a>

```csharp
public string SystemPromptAisearch { get; }
```

- *Type:* string

---

##### `SystemPromptIndexSummarization`<sup>Required</sup> <a name="SystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization"></a>

```csharp
public string SystemPromptIndexSummarization { get; }
```

- *Type:* string

---

##### `SystemPromptRewriteQuery`<sup>Required</sup> <a name="SystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery"></a>

```csharp
public string SystemPromptRewriteQuery { get; }
```

- *Type:* string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId"></a>

```csharp
public string TokenId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchInstanceConfig <a name="AiSearchInstanceConfig" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Id,
    string AiGatewayId = null,
    string AisearchModel = null,
    bool|IResolvable Cache = null,
    string CacheThreshold = null,
    double CacheTtl = null,
    bool|IResolvable Chunk = null,
    double ChunkOverlap = null,
    double ChunkSize = null,
    IResolvable|AiSearchInstanceCustomMetadata[] CustomMetadata = null,
    string EmbeddingModel = null,
    string FusionMethod = null,
    bool|IResolvable HybridSearchEnabled = null,
    AiSearchInstanceIndexingOptions IndexingOptions = null,
    AiSearchInstanceIndexMethod IndexMethod = null,
    double MaxNumResults = null,
    AiSearchInstanceMetadata Metadata = null,
    bool|IResolvable Paused = null,
    AiSearchInstancePublicEndpointParams PublicEndpointParams = null,
    bool|IResolvable Reranking = null,
    string RerankingModel = null,
    AiSearchInstanceRetrievalOptions RetrievalOptions = null,
    string RewriteModel = null,
    bool|IResolvable RewriteQuery = null,
    double ScoreThreshold = null,
    string Source = null,
    AiSearchInstanceSourceParams SourceParams = null,
    bool|IResolvable Summarization = null,
    string SummarizationModel = null,
    double SyncInterval = null,
    string SystemPromptAisearch = null,
    string SystemPromptIndexSummarization = null,
    string SystemPromptRewriteQuery = null,
    string TokenId = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id">Id</a></code> | <code>string</code> | AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId">AiGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel">AisearchModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache">Cache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold">CacheThreshold</a></code> | <code>string</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl">CacheTtl</a></code> | <code>double</code> | Cache entry TTL in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk">Chunk</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize">ChunkSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata">CustomMetadata</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel">EmbeddingModel</a></code> | <code>string</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod">FusionMethod</a></code> | <code>string</code> | Available values: "max", "rrf". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled">HybridSearchEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deprecated — use index_method instead. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions">IndexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod">IndexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | Controls which storage backends are used during indexing. Defaults to vector-only. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults">MaxNumResults</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused">Paused</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams">PublicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking">Reranking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel">RerankingModel</a></code> | <code>string</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions">RetrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel">RewriteModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery">RewriteQuery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold">ScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams">SourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization">Summarization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval">SyncInterval</a></code> | <code>double</code> | Interval between automatic syncs, in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch">SystemPromptAisearch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization">SystemPromptIndexSummarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery">SystemPromptRewriteQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId">TokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type">Type</a></code> | <code>string</code> | Available values: "r2", "web-crawler". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AiGatewayId`<sup>Optional</sup> <a name="AiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId"></a>

```csharp
public string AiGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `AisearchModel`<sup>Optional</sup> <a name="AisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel"></a>

```csharp
public string AisearchModel { get; set; }
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache"></a>

```csharp
public bool|IResolvable Cache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `CacheThreshold`<sup>Optional</sup> <a name="CacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold"></a>

```csharp
public string CacheThreshold { get; set; }
```

- *Type:* string

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `CacheTtl`<sup>Optional</sup> <a name="CacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl"></a>

```csharp
public double CacheTtl { get; set; }
```

- *Type:* double

Cache entry TTL in seconds.

Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
Available values: 600, 1800, 3600, 7200, 21600, 43200, 86400, 172800, 259200, 518400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#cache_ttl AiSearchInstance#cache_ttl}

---

##### `Chunk`<sup>Optional</sup> <a name="Chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk"></a>

```csharp
public bool|IResolvable Chunk { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `ChunkOverlap`<sup>Optional</sup> <a name="ChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `ChunkSize`<sup>Optional</sup> <a name="ChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize"></a>

```csharp
public double ChunkSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata"></a>

```csharp
public IResolvable|AiSearchInstanceCustomMetadata[] CustomMetadata { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `EmbeddingModel`<sup>Optional</sup> <a name="EmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel"></a>

```csharp
public string EmbeddingModel { get; set; }
```

- *Type:* string

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `FusionMethod`<sup>Optional</sup> <a name="FusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod"></a>

```csharp
public string FusionMethod { get; set; }
```

- *Type:* string

Available values: "max", "rrf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}

---

##### `HybridSearchEnabled`<sup>Optional</sup> <a name="HybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled"></a>

```csharp
public bool|IResolvable HybridSearchEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deprecated — use index_method instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}

---

##### `IndexingOptions`<sup>Optional</sup> <a name="IndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions"></a>

```csharp
public AiSearchInstanceIndexingOptions IndexingOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}.

---

##### `IndexMethod`<sup>Optional</sup> <a name="IndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod"></a>

```csharp
public AiSearchInstanceIndexMethod IndexMethod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

Controls which storage backends are used during indexing. Defaults to vector-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}

---

##### `MaxNumResults`<sup>Optional</sup> <a name="MaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults"></a>

```csharp
public double MaxNumResults { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata"></a>

```csharp
public AiSearchInstanceMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused"></a>

```csharp
public bool|IResolvable Paused { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `PublicEndpointParams`<sup>Optional</sup> <a name="PublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams"></a>

```csharp
public AiSearchInstancePublicEndpointParams PublicEndpointParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `Reranking`<sup>Optional</sup> <a name="Reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking"></a>

```csharp
public bool|IResolvable Reranking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `RerankingModel`<sup>Optional</sup> <a name="RerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel"></a>

```csharp
public string RerankingModel { get; set; }
```

- *Type:* string

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `RetrievalOptions`<sup>Optional</sup> <a name="RetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions"></a>

```csharp
public AiSearchInstanceRetrievalOptions RetrievalOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}.

---

##### `RewriteModel`<sup>Optional</sup> <a name="RewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel"></a>

```csharp
public string RewriteModel { get; set; }
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `RewriteQuery`<sup>Optional</sup> <a name="RewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery"></a>

```csharp
public bool|IResolvable RewriteQuery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `ScoreThreshold`<sup>Optional</sup> <a name="ScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold"></a>

```csharp
public double ScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `SourceParams`<sup>Optional</sup> <a name="SourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams"></a>

```csharp
public AiSearchInstanceSourceParams SourceParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `Summarization`<sup>Optional</sup> <a name="Summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization"></a>

```csharp
public bool|IResolvable Summarization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `SummarizationModel`<sup>Optional</sup> <a name="SummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; set; }
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `SyncInterval`<sup>Optional</sup> <a name="SyncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval"></a>

```csharp
public double SyncInterval { get; set; }
```

- *Type:* double

Interval between automatic syncs, in seconds.

Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}

---

##### `SystemPromptAisearch`<sup>Optional</sup> <a name="SystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch"></a>

```csharp
public string SystemPromptAisearch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `SystemPromptIndexSummarization`<sup>Optional</sup> <a name="SystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization"></a>

```csharp
public string SystemPromptIndexSummarization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `SystemPromptRewriteQuery`<sup>Optional</sup> <a name="SystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery"></a>

```csharp
public string SystemPromptRewriteQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `TokenId`<sup>Optional</sup> <a name="TokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId"></a>

```csharp
public string TokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

### AiSearchInstanceCustomMetadata <a name="AiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceCustomMetadata {
    string DataType,
    string FieldName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType">DataType</a></code> | <code>string</code> | Available values: "text", "number", "boolean", "datetime". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}. |

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Available values: "text", "number", "boolean", "datetime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}.

---

### AiSearchInstanceIndexingOptions <a name="AiSearchInstanceIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceIndexingOptions {
    string KeywordTokenizer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer">KeywordTokenizer</a></code> | <code>string</code> | Tokenizer used for keyword search indexing. |

---

##### `KeywordTokenizer`<sup>Optional</sup> <a name="KeywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer"></a>

```csharp
public string KeywordTokenizer { get; set; }
```

- *Type:* string

Tokenizer used for keyword search indexing.

porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
Available values: "porter", "trigram".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword_tokenizer AiSearchInstance#keyword_tokenizer}

---

### AiSearchInstanceIndexMethod <a name="AiSearchInstanceIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceIndexMethod {
    bool|IResolvable Keyword,
    bool|IResolvable Vector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword">Keyword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable keyword (BM25) storage backend. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector">Vector</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable vector (embedding) storage backend. |

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword"></a>

```csharp
public bool|IResolvable Keyword { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable keyword (BM25) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword AiSearchInstance#keyword}

---

##### `Vector`<sup>Required</sup> <a name="Vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector"></a>

```csharp
public bool|IResolvable Vector { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable vector (embedding) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#vector AiSearchInstance#vector}

---

### AiSearchInstanceMetadata <a name="AiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceMetadata {
    bool|IResolvable CreatedFromAisearchWizard = null,
    string WorkerDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain">WorkerDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}. |

---

##### `CreatedFromAisearchWizard`<sup>Optional</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard"></a>

```csharp
public bool|IResolvable CreatedFromAisearchWizard { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

##### `WorkerDomain`<sup>Optional</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain"></a>

```csharp
public string WorkerDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

### AiSearchInstancePublicEndpointParams <a name="AiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParams {
    string[] AuthorizedHosts = null,
    AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint ChatCompletionsEndpoint = null,
    bool|IResolvable Enabled = null,
    AiSearchInstancePublicEndpointParamsMcp Mcp = null,
    AiSearchInstancePublicEndpointParamsRateLimit RateLimit = null,
    AiSearchInstancePublicEndpointParamsSearchEndpoint SearchEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts">AuthorizedHosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}. |

---

##### `AuthorizedHosts`<sup>Optional</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts"></a>

```csharp
public string[] AuthorizedHosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

##### `ChatCompletionsEndpoint`<sup>Optional</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```csharp
public AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint ChatCompletionsEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

##### `Mcp`<sup>Optional</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp"></a>

```csharp
public AiSearchInstancePublicEndpointParamsMcp Mcp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit"></a>

```csharp
public AiSearchInstancePublicEndpointParamsRateLimit RateLimit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

##### `SearchEndpoint`<sup>Optional</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint"></a>

```csharp
public AiSearchInstancePublicEndpointParamsSearchEndpoint SearchEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

### AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsMcp <a name="AiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsMcp {
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#description AiSearchInstance#description}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable MCP endpoint for this public endpoint. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#description AiSearchInstance#description}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsRateLimit <a name="AiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsRateLimit {
    double PeriodMs = null,
    double Requests = null,
    string Technique = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs">PeriodMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests">Requests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique">Technique</a></code> | <code>string</code> | Available values: "fixed", "sliding". |

---

##### `PeriodMs`<sup>Optional</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs"></a>

```csharp
public double PeriodMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests"></a>

```csharp
public double Requests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique"></a>

```csharp
public string Technique { get; set; }
```

- *Type:* string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

### AiSearchInstancePublicEndpointParamsSearchEndpoint <a name="AiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsSearchEndpoint {
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable search endpoint for this public endpoint. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstanceRetrievalOptions <a name="AiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceRetrievalOptions {
    IResolvable|AiSearchInstanceRetrievalOptionsBoostBy[] BoostBy = null,
    string KeywordMatchMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy">BoostBy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | Metadata fields to boost search results by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode">KeywordMatchMode</a></code> | <code>string</code> | Controls which documents are candidates for BM25 scoring. |

---

##### `BoostBy`<sup>Optional</sup> <a name="BoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptionsBoostBy[] BoostBy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

Metadata fields to boost search results by.

Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#boost_by AiSearchInstance#boost_by}

---

##### `KeywordMatchMode`<sup>Optional</sup> <a name="KeywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode"></a>

```csharp
public string KeywordMatchMode { get; set; }
```

- *Type:* string

Controls which documents are candidates for BM25 scoring.

'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
Available values: "and", "or".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#keyword_match_mode AiSearchInstance#keyword_match_mode}

---

### AiSearchInstanceRetrievalOptionsBoostBy <a name="AiSearchInstanceRetrievalOptionsBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceRetrievalOptionsBoostBy {
    string Field,
    string Direction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field">Field</a></code> | <code>string</code> | Metadata field name to boost by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction">Direction</a></code> | <code>string</code> | Boost direction. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Metadata field name to boost by.

Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#field AiSearchInstance#field}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Boost direction.

'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
Available values: "asc", "desc", "exists", "not_exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#direction AiSearchInstance#direction}

---

### AiSearchInstanceSourceParams <a name="AiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParams {
    string[] ExcludeItems = null,
    string[] IncludeItems = null,
    string Prefix = null,
    string R2Jurisdiction = null,
    AiSearchInstanceSourceParamsWebCrawler WebCrawler = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems">ExcludeItems</a></code> | <code>string[]</code> | List of path patterns to exclude. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems">IncludeItems</a></code> | <code>string[]</code> | List of path patterns to include. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}. |

---

##### `ExcludeItems`<sup>Optional</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems"></a>

```csharp
public string[] ExcludeItems { get; set; }
```

- *Type:* string[]

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

##### `IncludeItems`<sup>Optional</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems"></a>

```csharp
public string[] IncludeItems { get; set; }
```

- *Type:* string[]

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

##### `R2Jurisdiction`<sup>Optional</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `WebCrawler`<sup>Optional</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawler WebCrawler { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

### AiSearchInstanceSourceParamsWebCrawler <a name="AiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawler {
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptions CrawlOptions = null,
    AiSearchInstanceSourceParamsWebCrawlerParseOptions ParseOptions = null,
    string ParseType = null,
    AiSearchInstanceSourceParamsWebCrawlerStoreOptions StoreOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions">CrawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType">ParseType</a></code> | <code>string</code> | Available values: "sitemap", "feed-rss", "crawl". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}. |

---

##### `CrawlOptions`<sup>Optional</sup> <a name="CrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerCrawlOptions CrawlOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}.

---

##### `ParseOptions`<sup>Optional</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerParseOptions ParseOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

##### `ParseType`<sup>Optional</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType"></a>

```csharp
public string ParseType { get; set; }
```

- *Type:* string

Available values: "sitemap", "feed-rss", "crawl".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

##### `StoreOptions`<sup>Optional</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerStoreOptions StoreOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

### AiSearchInstanceSourceParamsWebCrawlerCrawlOptions <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerCrawlOptions {
    double Depth = null,
    bool|IResolvable IncludeExternalLinks = null,
    bool|IResolvable IncludeSubdomains = null,
    double MaxAge = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth">Depth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks">IncludeExternalLinks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains">IncludeSubdomains</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source">Source</a></code> | <code>string</code> | Available values: "all", "sitemaps", "links". |

---

##### `Depth`<sup>Optional</sup> <a name="Depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth"></a>

```csharp
public double Depth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}.

---

##### `IncludeExternalLinks`<sup>Optional</sup> <a name="IncludeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks"></a>

```csharp
public bool|IResolvable IncludeExternalLinks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}.

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains"></a>

```csharp
public bool|IResolvable IncludeSubdomains { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Available values: "all", "sitemaps", "links".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#source AiSearchInstance#source}

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerParseOptions {
    IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] ContentSelector = null,
    System.Collections.Generic.IDictionary<string, string> IncludeHeaders = null,
    bool|IResolvable IncludeImages = null,
    string[] SpecificSitemaps = null,
    bool|IResolvable UseBrowserRendering = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector">ContentSelector</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | List of path-to-selector mappings for extracting specific content from crawled pages. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders">IncludeHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Up to 5 custom HTTP headers sent with each crawl request. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages">IncludeImages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps">SpecificSitemaps</a></code> | <code>string[]</code> | List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}. |

---

##### `ContentSelector`<sup>Optional</sup> <a name="ContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] ContentSelector { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

List of path-to-selector mappings for extracting specific content from crawled pages.

Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#content_selector AiSearchInstance#content_selector}

---

##### `IncludeHeaders`<sup>Optional</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Up to 5 custom HTTP headers sent with each crawl request.

Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}

---

##### `IncludeImages`<sup>Optional</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages"></a>

```csharp
public bool|IResolvable IncludeImages { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

##### `SpecificSitemaps`<sup>Optional</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps"></a>

```csharp
public string[] SpecificSitemaps { get; set; }
```

- *Type:* string[]

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

##### `UseBrowserRendering`<sup>Optional</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering"></a>

```csharp
public bool|IResolvable UseBrowserRendering { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {
    string Path,
    string Selector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path">Path</a></code> | <code>string</code> | Glob pattern to match against the page URL path. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector">Selector</a></code> | <code>string</code> | CSS selector to extract content from pages matching the path pattern. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Glob pattern to match against the page URL path.

Uses standard glob syntax: * matches within a segment, ** crosses directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#path AiSearchInstance#path}

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

CSS selector to extract content from pages matching the path pattern.

Must not contain disallowed characters (;, `, $, {, }, ). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#selector AiSearchInstance#selector}

---

### AiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerStoreOptions {
    string StorageId,
    string R2Jurisdiction = null,
    string StorageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId">StorageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType">StorageType</a></code> | <code>string</code> | Available values: "r2". |

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId"></a>

```csharp
public string StorageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

##### `R2Jurisdiction`<sup>Optional</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchInstanceCustomMetadataList <a name="AiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceCustomMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get"></a>

```csharp
private AiSearchInstanceCustomMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceCustomMetadata[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---


### AiSearchInstanceCustomMetadataOutputReference <a name="AiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceCustomMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceCustomMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>

---


### AiSearchInstanceIndexingOptionsOutputReference <a name="AiSearchInstanceIndexingOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceIndexingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resetKeywordTokenizer">ResetKeywordTokenizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeywordTokenizer` <a name="ResetKeywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resetKeywordTokenizer"></a>

```csharp
private void ResetKeywordTokenizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput">KeywordTokenizerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer">KeywordTokenizer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeywordTokenizerInput`<sup>Optional</sup> <a name="KeywordTokenizerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput"></a>

```csharp
public string KeywordTokenizerInput { get; }
```

- *Type:* string

---

##### `KeywordTokenizer`<sup>Required</sup> <a name="KeywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer"></a>

```csharp
public string KeywordTokenizer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceIndexingOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---


### AiSearchInstanceIndexMethodOutputReference <a name="AiSearchInstanceIndexMethodOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceIndexMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput">KeywordInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput">VectorInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword">Keyword</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector">Vector</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeywordInput`<sup>Optional</sup> <a name="KeywordInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput"></a>

```csharp
public bool|IResolvable KeywordInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VectorInput`<sup>Optional</sup> <a name="VectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput"></a>

```csharp
public bool|IResolvable VectorInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword"></a>

```csharp
public bool|IResolvable Keyword { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Vector`<sup>Required</sup> <a name="Vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector"></a>

```csharp
public bool|IResolvable Vector { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceIndexMethod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---


### AiSearchInstanceMetadataOutputReference <a name="AiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreatedFromAisearchWizard` <a name="ResetCreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard"></a>

```csharp
private void ResetCreatedFromAisearchWizard()
```

##### `ResetWorkerDomain` <a name="ResetWorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain"></a>

```csharp
private void ResetWorkerDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput">CreatedFromAisearchWizardInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput">WorkerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">CreatedFromAisearchWizard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain">WorkerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedFromAisearchWizardInput`<sup>Optional</sup> <a name="CreatedFromAisearchWizardInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput"></a>

```csharp
public bool|IResolvable CreatedFromAisearchWizardInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkerDomainInput`<sup>Optional</sup> <a name="WorkerDomainInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput"></a>

```csharp
public string WorkerDomainInput { get; }
```

- *Type:* string

---

##### `CreatedFromAisearchWizard`<sup>Required</sup> <a name="CreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```csharp
public bool|IResolvable CreatedFromAisearchWizard { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkerDomain`<sup>Required</sup> <a name="WorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```csharp
public string WorkerDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---


### AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### AiSearchInstancePublicEndpointParamsMcpOutputReference <a name="AiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsMcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsMcp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---


### AiSearchInstancePublicEndpointParamsOutputReference <a name="AiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChatCompletionsEndpoint` <a name="PutChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```csharp
private void PutChatCompletionsEndpoint(AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `PutMcp` <a name="PutMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp"></a>

```csharp
private void PutMcp(AiSearchInstancePublicEndpointParamsMcp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `PutRateLimit` <a name="PutRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit"></a>

```csharp
private void PutRateLimit(AiSearchInstancePublicEndpointParamsRateLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `PutSearchEndpoint` <a name="PutSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```csharp
private void PutSearchEndpoint(AiSearchInstancePublicEndpointParamsSearchEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `ResetAuthorizedHosts` <a name="ResetAuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```csharp
private void ResetAuthorizedHosts()
```

##### `ResetChatCompletionsEndpoint` <a name="ResetChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```csharp
private void ResetChatCompletionsEndpoint()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMcp` <a name="ResetMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp"></a>

```csharp
private void ResetMcp()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```

##### `ResetSearchEndpoint` <a name="ResetSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```csharp
private void ResetSearchEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">ChatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">SearchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput">AuthorizedHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">ChatCompletionsEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput">McpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput">SearchEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">AuthorizedHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChatCompletionsEndpoint`<sup>Required</sup> <a name="ChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```csharp
public AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference ChatCompletionsEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```csharp
public AiSearchInstancePublicEndpointParamsMcpOutputReference Mcp { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```csharp
public AiSearchInstancePublicEndpointParamsRateLimitOutputReference RateLimit { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `SearchEndpoint`<sup>Required</sup> <a name="SearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```csharp
public AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference SearchEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `AuthorizedHostsInput`<sup>Optional</sup> <a name="AuthorizedHostsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```csharp
public string[] AuthorizedHostsInput { get; }
```

- *Type:* string[]

---

##### `ChatCompletionsEndpointInput`<sup>Optional</sup> <a name="ChatCompletionsEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint ChatCompletionsEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `McpInput`<sup>Optional</sup> <a name="McpInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsMcp McpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsRateLimit RateLimitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `SearchEndpointInput`<sup>Optional</sup> <a name="SearchEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsSearchEndpoint SearchEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `AuthorizedHosts`<sup>Required</sup> <a name="AuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```csharp
public string[] AuthorizedHosts { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---


### AiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="AiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsRateLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriodMs` <a name="ResetPeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```csharp
private void ResetPeriodMs()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```csharp
private void ResetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">PeriodMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput">RequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">PeriodMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">Requests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">Technique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodMsInput`<sup>Optional</sup> <a name="PeriodMsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```csharp
public double PeriodMsInput { get; }
```

- *Type:* double

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```csharp
public double RequestsInput { get; }
```

- *Type:* double

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```csharp
public string TechniqueInput { get; }
```

- *Type:* string

---

##### `PeriodMs`<sup>Required</sup> <a name="PeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```csharp
public double PeriodMs { get; }
```

- *Type:* double

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```csharp
public double Requests { get; }
```

- *Type:* double

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```csharp
public string Technique { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsRateLimit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---


### AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstancePublicEndpointParamsSearchEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### AiSearchInstanceRetrievalOptionsBoostByList <a name="AiSearchInstanceRetrievalOptionsBoostByList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceRetrievalOptionsBoostByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get"></a>

```csharp
private AiSearchInstanceRetrievalOptionsBoostByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptionsBoostBy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---


### AiSearchInstanceRetrievalOptionsBoostByOutputReference <a name="AiSearchInstanceRetrievalOptionsBoostByOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceRetrievalOptionsBoostByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptionsBoostBy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>

---


### AiSearchInstanceRetrievalOptionsOutputReference <a name="AiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceRetrievalOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy">PutBoostBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetBoostBy">ResetBoostBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetKeywordMatchMode">ResetKeywordMatchMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoostBy` <a name="PutBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy"></a>

```csharp
private void PutBoostBy(IResolvable|AiSearchInstanceRetrievalOptionsBoostBy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---

##### `ResetBoostBy` <a name="ResetBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetBoostBy"></a>

```csharp
private void ResetBoostBy()
```

##### `ResetKeywordMatchMode` <a name="ResetKeywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetKeywordMatchMode"></a>

```csharp
private void ResetKeywordMatchMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy">BoostBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput">BoostByInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput">KeywordMatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">KeywordMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoostBy`<sup>Required</sup> <a name="BoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy"></a>

```csharp
public AiSearchInstanceRetrievalOptionsBoostByList BoostBy { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a>

---

##### `BoostByInput`<sup>Optional</sup> <a name="BoostByInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptionsBoostBy[] BoostByInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---

##### `KeywordMatchModeInput`<sup>Optional</sup> <a name="KeywordMatchModeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput"></a>

```csharp
public string KeywordMatchModeInput { get; }
```

- *Type:* string

---

##### `KeywordMatchMode`<sup>Required</sup> <a name="KeywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```csharp
public string KeywordMatchMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceRetrievalOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---


### AiSearchInstanceSourceParamsOutputReference <a name="AiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWebCrawler` <a name="PutWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler"></a>

```csharp
private void PutWebCrawler(AiSearchInstanceSourceParamsWebCrawler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `ResetExcludeItems` <a name="ResetExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems"></a>

```csharp
private void ResetExcludeItems()
```

##### `ResetIncludeItems` <a name="ResetIncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems"></a>

```csharp
private void ResetIncludeItems()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetR2Jurisdiction` <a name="ResetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction"></a>

```csharp
private void ResetR2Jurisdiction()
```

##### `ResetWebCrawler` <a name="ResetWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler"></a>

```csharp
private void ResetWebCrawler()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler">WebCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput">ExcludeItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput">IncludeItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput">R2JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput">WebCrawlerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems">ExcludeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems">IncludeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WebCrawler`<sup>Required</sup> <a name="WebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerOutputReference WebCrawler { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `ExcludeItemsInput`<sup>Optional</sup> <a name="ExcludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput"></a>

```csharp
public string[] ExcludeItemsInput { get; }
```

- *Type:* string[]

---

##### `IncludeItemsInput`<sup>Optional</sup> <a name="IncludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput"></a>

```csharp
public string[] IncludeItemsInput { get; }
```

- *Type:* string[]

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `R2JurisdictionInput`<sup>Optional</sup> <a name="R2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput"></a>

```csharp
public string R2JurisdictionInput { get; }
```

- *Type:* string

---

##### `WebCrawlerInput`<sup>Optional</sup> <a name="WebCrawlerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawler WebCrawlerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `ExcludeItems`<sup>Required</sup> <a name="ExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```csharp
public string[] ExcludeItems { get; }
```

- *Type:* string[]

---

##### `IncludeItems`<sup>Required</sup> <a name="IncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```csharp
public string[] IncludeItems { get; }
```

- *Type:* string[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---


### AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetDepth">ResetDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeExternalLinks">ResetIncludeExternalLinks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDepth` <a name="ResetDepth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetDepth"></a>

```csharp
private void ResetDepth()
```

##### `ResetIncludeExternalLinks` <a name="ResetIncludeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeExternalLinks"></a>

```csharp
private void ResetIncludeExternalLinks()
```

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeSubdomains"></a>

```csharp
private void ResetIncludeSubdomains()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput">DepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput">IncludeExternalLinksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth">Depth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks">IncludeExternalLinks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DepthInput`<sup>Optional</sup> <a name="DepthInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput"></a>

```csharp
public double DepthInput { get; }
```

- *Type:* double

---

##### `IncludeExternalLinksInput`<sup>Optional</sup> <a name="IncludeExternalLinksInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput"></a>

```csharp
public bool|IResolvable IncludeExternalLinksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput"></a>

```csharp
public bool|IResolvable IncludeSubdomainsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Depth`<sup>Required</sup> <a name="Depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth"></a>

```csharp
public double Depth { get; }
```

- *Type:* double

---

##### `IncludeExternalLinks`<sup>Required</sup> <a name="IncludeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks"></a>

```csharp
public bool|IResolvable IncludeExternalLinks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains"></a>

```csharp
public bool|IResolvable IncludeSubdomains { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerCrawlOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions">PutCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions">PutParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions">PutStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetCrawlOptions">ResetCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions">ResetParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType">ResetParseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions">ResetStoreOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrawlOptions` <a name="PutCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions"></a>

```csharp
private void PutCrawlOptions(AiSearchInstanceSourceParamsWebCrawlerCrawlOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `PutParseOptions` <a name="PutParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions"></a>

```csharp
private void PutParseOptions(AiSearchInstanceSourceParamsWebCrawlerParseOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `PutStoreOptions` <a name="PutStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions"></a>

```csharp
private void PutStoreOptions(AiSearchInstanceSourceParamsWebCrawlerStoreOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `ResetCrawlOptions` <a name="ResetCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetCrawlOptions"></a>

```csharp
private void ResetCrawlOptions()
```

##### `ResetParseOptions` <a name="ResetParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions"></a>

```csharp
private void ResetParseOptions()
```

##### `ResetParseType` <a name="ResetParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType"></a>

```csharp
private void ResetParseType()
```

##### `ResetStoreOptions` <a name="ResetStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions"></a>

```csharp
private void ResetStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions">CrawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">ParseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput">CrawlOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput">ParseOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput">ParseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput">StoreOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">ParseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlOptions`<sup>Required</sup> <a name="CrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference CrawlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a>

---

##### `ParseOptions`<sup>Required</sup> <a name="ParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference ParseOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference StoreOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `CrawlOptionsInput`<sup>Optional</sup> <a name="CrawlOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerCrawlOptions CrawlOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `ParseOptionsInput`<sup>Optional</sup> <a name="ParseOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptions ParseOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `ParseTypeInput`<sup>Optional</sup> <a name="ParseTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput"></a>

```csharp
public string ParseTypeInput { get; }
```

- *Type:* string

---

##### `StoreOptionsInput`<sup>Optional</sup> <a name="StoreOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerStoreOptions StoreOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `ParseType`<sup>Required</sup> <a name="ParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```csharp
public string ParseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawler InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get"></a>

```csharp
private AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector">PutContentSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetContentSelector">ResetContentSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders">ResetIncludeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages">ResetIncludeImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps">ResetSpecificSitemaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering">ResetUseBrowserRendering</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentSelector` <a name="PutContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector"></a>

```csharp
private void PutContentSelector(IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---

##### `ResetContentSelector` <a name="ResetContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetContentSelector"></a>

```csharp
private void ResetContentSelector()
```

##### `ResetIncludeHeaders` <a name="ResetIncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders"></a>

```csharp
private void ResetIncludeHeaders()
```

##### `ResetIncludeImages` <a name="ResetIncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages"></a>

```csharp
private void ResetIncludeImages()
```

##### `ResetSpecificSitemaps` <a name="ResetSpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps"></a>

```csharp
private void ResetSpecificSitemaps()
```

##### `ResetUseBrowserRendering` <a name="ResetUseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering"></a>

```csharp
private void ResetUseBrowserRendering()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector">ContentSelector</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput">ContentSelectorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput">IncludeHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput">IncludeImagesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput">SpecificSitemapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput">UseBrowserRenderingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">IncludeHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">IncludeImages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">SpecificSitemaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">UseBrowserRendering</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentSelector`<sup>Required</sup> <a name="ContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector"></a>

```csharp
public AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList ContentSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a>

---

##### `ContentSelectorInput`<sup>Optional</sup> <a name="ContentSelectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] ContentSelectorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---

##### `IncludeHeadersInput`<sup>Optional</sup> <a name="IncludeHeadersInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeImagesInput`<sup>Optional</sup> <a name="IncludeImagesInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput"></a>

```csharp
public bool|IResolvable IncludeImagesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpecificSitemapsInput`<sup>Optional</sup> <a name="SpecificSitemapsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput"></a>

```csharp
public string[] SpecificSitemapsInput { get; }
```

- *Type:* string[]

---

##### `UseBrowserRenderingInput`<sup>Optional</sup> <a name="UseBrowserRenderingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput"></a>

```csharp
public bool|IResolvable UseBrowserRenderingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeHeaders`<sup>Required</sup> <a name="IncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IncludeHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeImages`<sup>Required</sup> <a name="IncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```csharp
public bool|IResolvable IncludeImages { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpecificSitemaps`<sup>Required</sup> <a name="SpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```csharp
public string[] SpecificSitemaps { get; }
```

- *Type:* string[]

---

##### `UseBrowserRendering`<sup>Required</sup> <a name="UseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```csharp
public bool|IResolvable UseBrowserRendering { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerParseOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetR2Jurisdiction` <a name="ResetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction"></a>

```csharp
private void ResetR2Jurisdiction()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType"></a>

```csharp
private void ResetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput">R2JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput">StorageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">R2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">StorageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `R2JurisdictionInput`<sup>Optional</sup> <a name="R2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput"></a>

```csharp
public string R2JurisdictionInput { get; }
```

- *Type:* string

---

##### `StorageIdInput`<sup>Optional</sup> <a name="StorageIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput"></a>

```csharp
public string StorageIdInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `R2Jurisdiction`<sup>Required</sup> <a name="R2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```csharp
public string R2Jurisdiction { get; }
```

- *Type:* string

---

##### `StorageId`<sup>Required</sup> <a name="StorageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```csharp
public string StorageId { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchInstanceSourceParamsWebCrawlerStoreOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---



