# `aiSearchInstance` Submodule <a name="`aiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.aiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchInstance <a name="AiSearchInstance" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstance(scope: Construct, id: string, config: AiSearchInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig">AiSearchInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig">AiSearchInstanceConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetadata` <a name="putCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata"></a>

```typescript
public putCustomMetadata(value: IResolvable | AiSearchInstanceCustomMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putCustomMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---

##### `putIndexingOptions` <a name="putIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions"></a>

```typescript
public putIndexingOptions(value: AiSearchInstanceIndexingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `putIndexMethod` <a name="putIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod"></a>

```typescript
public putIndexMethod(value: AiSearchInstanceIndexMethod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putIndexMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata"></a>

```typescript
public putMetadata(value: AiSearchInstanceMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `putPublicEndpointParams` <a name="putPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams"></a>

```typescript
public putPublicEndpointParams(value: AiSearchInstancePublicEndpointParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putPublicEndpointParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `putRetrievalOptions` <a name="putRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions"></a>

```typescript
public putRetrievalOptions(value: AiSearchInstanceRetrievalOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putRetrievalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `putSourceParams` <a name="putSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams"></a>

```typescript
public putSourceParams(value: AiSearchInstanceSourceParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.putSourceParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `resetAiGatewayId` <a name="resetAiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAiGatewayId"></a>

```typescript
public resetAiGatewayId(): void
```

##### `resetAisearchModel` <a name="resetAisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetAisearchModel"></a>

```typescript
public resetAisearchModel(): void
```

##### `resetCache` <a name="resetCache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCache"></a>

```typescript
public resetCache(): void
```

##### `resetCacheThreshold` <a name="resetCacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheThreshold"></a>

```typescript
public resetCacheThreshold(): void
```

##### `resetCacheTtl` <a name="resetCacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCacheTtl"></a>

```typescript
public resetCacheTtl(): void
```

##### `resetChunk` <a name="resetChunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunk"></a>

```typescript
public resetChunk(): void
```

##### `resetChunkOverlap` <a name="resetChunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkOverlap"></a>

```typescript
public resetChunkOverlap(): void
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetChunkSize"></a>

```typescript
public resetChunkSize(): void
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetCustomMetadata"></a>

```typescript
public resetCustomMetadata(): void
```

##### `resetEmbeddingModel` <a name="resetEmbeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetEmbeddingModel"></a>

```typescript
public resetEmbeddingModel(): void
```

##### `resetFusionMethod` <a name="resetFusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetFusionMethod"></a>

```typescript
public resetFusionMethod(): void
```

##### `resetHybridSearchEnabled` <a name="resetHybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetHybridSearchEnabled"></a>

```typescript
public resetHybridSearchEnabled(): void
```

##### `resetIndexingOptions` <a name="resetIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexingOptions"></a>

```typescript
public resetIndexingOptions(): void
```

##### `resetIndexMethod` <a name="resetIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetIndexMethod"></a>

```typescript
public resetIndexMethod(): void
```

##### `resetMaxNumResults` <a name="resetMaxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMaxNumResults"></a>

```typescript
public resetMaxNumResults(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetPublicEndpointParams` <a name="resetPublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetPublicEndpointParams"></a>

```typescript
public resetPublicEndpointParams(): void
```

##### `resetReranking` <a name="resetReranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetReranking"></a>

```typescript
public resetReranking(): void
```

##### `resetRerankingModel` <a name="resetRerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRerankingModel"></a>

```typescript
public resetRerankingModel(): void
```

##### `resetRetrievalOptions` <a name="resetRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRetrievalOptions"></a>

```typescript
public resetRetrievalOptions(): void
```

##### `resetRewriteModel` <a name="resetRewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteModel"></a>

```typescript
public resetRewriteModel(): void
```

##### `resetRewriteQuery` <a name="resetRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetRewriteQuery"></a>

```typescript
public resetRewriteQuery(): void
```

##### `resetScoreThreshold` <a name="resetScoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetScoreThreshold"></a>

```typescript
public resetScoreThreshold(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceParams` <a name="resetSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSourceParams"></a>

```typescript
public resetSourceParams(): void
```

##### `resetSummarization` <a name="resetSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarization"></a>

```typescript
public resetSummarization(): void
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSummarizationModel"></a>

```typescript
public resetSummarizationModel(): void
```

##### `resetSyncInterval` <a name="resetSyncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSyncInterval"></a>

```typescript
public resetSyncInterval(): void
```

##### `resetSystemPromptAisearch` <a name="resetSystemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptAisearch"></a>

```typescript
public resetSystemPromptAisearch(): void
```

##### `resetSystemPromptIndexSummarization` <a name="resetSystemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptIndexSummarization"></a>

```typescript
public resetSystemPromptIndexSummarization(): void
```

##### `resetSystemPromptRewriteQuery` <a name="resetSystemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetSystemPromptRewriteQuery"></a>

```typescript
public resetSystemPromptRewriteQuery(): void
```

##### `resetTokenId` <a name="resetTokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetTokenId"></a>

```typescript
public resetTokenId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.resetType"></a>

```typescript
public resetType(): void
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

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

aiSearchInstance.AiSearchInstance.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

aiSearchInstance.AiSearchInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

aiSearchInstance.AiSearchInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

aiSearchInstance.AiSearchInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata">customMetadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion">engineVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions">indexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod">indexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity">lastActivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId">publicEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams">publicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions">retrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams">sourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName">vectorizeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput">aiGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput">aisearchModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput">cacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput">cacheThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput">cacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput">chunkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput">chunkOverlapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput">chunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput">customMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput">embeddingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput">fusionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput">hybridSearchEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput">indexingOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput">indexMethodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput">maxNumResultsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput">publicEndpointParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput">rerankingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput">rerankingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput">retrievalOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput">rewriteModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput">rewriteQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput">scoreThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput">sourceParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput">summarizationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput">summarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput">syncIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput">systemPromptAisearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput">systemPromptIndexSummarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput">systemPromptRewriteQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput">tokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId">aiGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel">aisearchModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache">cache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold">cacheThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl">cacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk">chunk</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap">chunkOverlap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize">chunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel">embeddingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod">fusionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled">hybridSearchEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults">maxNumResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking">reranking</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel">rerankingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel">rewriteModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery">rewriteQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold">scoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization">summarization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval">syncInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch">systemPromptAisearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization">systemPromptIndexSummarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery">systemPromptRewriteQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId">tokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadata"></a>

```typescript
public readonly customMetadata: AiSearchInstanceCustomMetadataList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList">AiSearchInstanceCustomMetadataList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: number;
```

- *Type:* number

---

##### `indexingOptions`<sup>Required</sup> <a name="indexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptions"></a>

```typescript
public readonly indexingOptions: AiSearchInstanceIndexingOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference">AiSearchInstanceIndexingOptionsOutputReference</a>

---

##### `indexMethod`<sup>Required</sup> <a name="indexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethod"></a>

```typescript
public readonly indexMethod: AiSearchInstanceIndexMethodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference">AiSearchInstanceIndexMethodOutputReference</a>

---

##### `lastActivity`<sup>Required</sup> <a name="lastActivity" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.lastActivity"></a>

```typescript
public readonly lastActivity: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadata"></a>

```typescript
public readonly metadata: AiSearchInstanceMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference">AiSearchInstanceMetadataOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `publicEndpointId`<sup>Required</sup> <a name="publicEndpointId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointId"></a>

```typescript
public readonly publicEndpointId: string;
```

- *Type:* string

---

##### `publicEndpointParams`<sup>Required</sup> <a name="publicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParams"></a>

```typescript
public readonly publicEndpointParams: AiSearchInstancePublicEndpointParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference">AiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `retrievalOptions`<sup>Required</sup> <a name="retrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptions"></a>

```typescript
public readonly retrievalOptions: AiSearchInstanceRetrievalOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference">AiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `sourceParams`<sup>Required</sup> <a name="sourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParams"></a>

```typescript
public readonly sourceParams: AiSearchInstanceSourceParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference">AiSearchInstanceSourceParamsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vectorizeName`<sup>Required</sup> <a name="vectorizeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.vectorizeName"></a>

```typescript
public readonly vectorizeName: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aiGatewayIdInput`<sup>Optional</sup> <a name="aiGatewayIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayIdInput"></a>

```typescript
public readonly aiGatewayIdInput: string;
```

- *Type:* string

---

##### `aisearchModelInput`<sup>Optional</sup> <a name="aisearchModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModelInput"></a>

```typescript
public readonly aisearchModelInput: string;
```

- *Type:* string

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheInput"></a>

```typescript
public readonly cacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheThresholdInput`<sup>Optional</sup> <a name="cacheThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThresholdInput"></a>

```typescript
public readonly cacheThresholdInput: string;
```

- *Type:* string

---

##### `cacheTtlInput`<sup>Optional</sup> <a name="cacheTtlInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtlInput"></a>

```typescript
public readonly cacheTtlInput: number;
```

- *Type:* number

---

##### `chunkInput`<sup>Optional</sup> <a name="chunkInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkInput"></a>

```typescript
public readonly chunkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `chunkOverlapInput`<sup>Optional</sup> <a name="chunkOverlapInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlapInput"></a>

```typescript
public readonly chunkOverlapInput: number;
```

- *Type:* number

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSizeInput"></a>

```typescript
public readonly chunkSizeInput: number;
```

- *Type:* number

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.customMetadataInput"></a>

```typescript
public readonly customMetadataInput: IResolvable | AiSearchInstanceCustomMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---

##### `embeddingModelInput`<sup>Optional</sup> <a name="embeddingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModelInput"></a>

```typescript
public readonly embeddingModelInput: string;
```

- *Type:* string

---

##### `fusionMethodInput`<sup>Optional</sup> <a name="fusionMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethodInput"></a>

```typescript
public readonly fusionMethodInput: string;
```

- *Type:* string

---

##### `hybridSearchEnabledInput`<sup>Optional</sup> <a name="hybridSearchEnabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabledInput"></a>

```typescript
public readonly hybridSearchEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexingOptionsInput`<sup>Optional</sup> <a name="indexingOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexingOptionsInput"></a>

```typescript
public readonly indexingOptionsInput: IResolvable | AiSearchInstanceIndexingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---

##### `indexMethodInput`<sup>Optional</sup> <a name="indexMethodInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.indexMethodInput"></a>

```typescript
public readonly indexMethodInput: IResolvable | AiSearchInstanceIndexMethod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---

##### `maxNumResultsInput`<sup>Optional</sup> <a name="maxNumResultsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResultsInput"></a>

```typescript
public readonly maxNumResultsInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | AiSearchInstanceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `publicEndpointParamsInput`<sup>Optional</sup> <a name="publicEndpointParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.publicEndpointParamsInput"></a>

```typescript
public readonly publicEndpointParamsInput: IResolvable | AiSearchInstancePublicEndpointParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---

##### `rerankingInput`<sup>Optional</sup> <a name="rerankingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingInput"></a>

```typescript
public readonly rerankingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rerankingModelInput`<sup>Optional</sup> <a name="rerankingModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModelInput"></a>

```typescript
public readonly rerankingModelInput: string;
```

- *Type:* string

---

##### `retrievalOptionsInput`<sup>Optional</sup> <a name="retrievalOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.retrievalOptionsInput"></a>

```typescript
public readonly retrievalOptionsInput: IResolvable | AiSearchInstanceRetrievalOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---

##### `rewriteModelInput`<sup>Optional</sup> <a name="rewriteModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModelInput"></a>

```typescript
public readonly rewriteModelInput: string;
```

- *Type:* string

---

##### `rewriteQueryInput`<sup>Optional</sup> <a name="rewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQueryInput"></a>

```typescript
public readonly rewriteQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scoreThresholdInput`<sup>Optional</sup> <a name="scoreThresholdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThresholdInput"></a>

```typescript
public readonly scoreThresholdInput: number;
```

- *Type:* number

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceParamsInput`<sup>Optional</sup> <a name="sourceParamsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.sourceParamsInput"></a>

```typescript
public readonly sourceParamsInput: IResolvable | AiSearchInstanceSourceParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---

##### `summarizationInput`<sup>Optional</sup> <a name="summarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationInput"></a>

```typescript
public readonly summarizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModelInput"></a>

```typescript
public readonly summarizationModelInput: string;
```

- *Type:* string

---

##### `syncIntervalInput`<sup>Optional</sup> <a name="syncIntervalInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncIntervalInput"></a>

```typescript
public readonly syncIntervalInput: number;
```

- *Type:* number

---

##### `systemPromptAisearchInput`<sup>Optional</sup> <a name="systemPromptAisearchInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearchInput"></a>

```typescript
public readonly systemPromptAisearchInput: string;
```

- *Type:* string

---

##### `systemPromptIndexSummarizationInput`<sup>Optional</sup> <a name="systemPromptIndexSummarizationInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarizationInput"></a>

```typescript
public readonly systemPromptIndexSummarizationInput: string;
```

- *Type:* string

---

##### `systemPromptRewriteQueryInput`<sup>Optional</sup> <a name="systemPromptRewriteQueryInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQueryInput"></a>

```typescript
public readonly systemPromptRewriteQueryInput: string;
```

- *Type:* string

---

##### `tokenIdInput`<sup>Optional</sup> <a name="tokenIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenIdInput"></a>

```typescript
public readonly tokenIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aiGatewayId`<sup>Required</sup> <a name="aiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aiGatewayId"></a>

```typescript
public readonly aiGatewayId: string;
```

- *Type:* string

---

##### `aisearchModel`<sup>Required</sup> <a name="aisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.aisearchModel"></a>

```typescript
public readonly aisearchModel: string;
```

- *Type:* string

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cache"></a>

```typescript
public readonly cache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheThreshold`<sup>Required</sup> <a name="cacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheThreshold"></a>

```typescript
public readonly cacheThreshold: string;
```

- *Type:* string

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.cacheTtl"></a>

```typescript
public readonly cacheTtl: number;
```

- *Type:* number

---

##### `chunk`<sup>Required</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunk"></a>

```typescript
public readonly chunk: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `chunkOverlap`<sup>Required</sup> <a name="chunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkOverlap"></a>

```typescript
public readonly chunkOverlap: number;
```

- *Type:* number

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.chunkSize"></a>

```typescript
public readonly chunkSize: number;
```

- *Type:* number

---

##### `embeddingModel`<sup>Required</sup> <a name="embeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.embeddingModel"></a>

```typescript
public readonly embeddingModel: string;
```

- *Type:* string

---

##### `fusionMethod`<sup>Required</sup> <a name="fusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.fusionMethod"></a>

```typescript
public readonly fusionMethod: string;
```

- *Type:* string

---

##### `hybridSearchEnabled`<sup>Required</sup> <a name="hybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.hybridSearchEnabled"></a>

```typescript
public readonly hybridSearchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxNumResults`<sup>Required</sup> <a name="maxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.maxNumResults"></a>

```typescript
public readonly maxNumResults: number;
```

- *Type:* number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reranking`<sup>Required</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.reranking"></a>

```typescript
public readonly reranking: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rerankingModel`<sup>Required</sup> <a name="rerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rerankingModel"></a>

```typescript
public readonly rerankingModel: string;
```

- *Type:* string

---

##### `rewriteModel`<sup>Required</sup> <a name="rewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteModel"></a>

```typescript
public readonly rewriteModel: string;
```

- *Type:* string

---

##### `rewriteQuery`<sup>Required</sup> <a name="rewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.rewriteQuery"></a>

```typescript
public readonly rewriteQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scoreThreshold`<sup>Required</sup> <a name="scoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.scoreThreshold"></a>

```typescript
public readonly scoreThreshold: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarization"></a>

```typescript
public readonly summarization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

---

##### `syncInterval`<sup>Required</sup> <a name="syncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.syncInterval"></a>

```typescript
public readonly syncInterval: number;
```

- *Type:* number

---

##### `systemPromptAisearch`<sup>Required</sup> <a name="systemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptAisearch"></a>

```typescript
public readonly systemPromptAisearch: string;
```

- *Type:* string

---

##### `systemPromptIndexSummarization`<sup>Required</sup> <a name="systemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptIndexSummarization"></a>

```typescript
public readonly systemPromptIndexSummarization: string;
```

- *Type:* string

---

##### `systemPromptRewriteQuery`<sup>Required</sup> <a name="systemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.systemPromptRewriteQuery"></a>

```typescript
public readonly systemPromptRewriteQuery: string;
```

- *Type:* string

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchInstanceConfig <a name="AiSearchInstanceConfig" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceConfig: aiSearchInstance.AiSearchInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id">id</a></code> | <code>string</code> | AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId">aiGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel">aisearchModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache">cache</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold">cacheThreshold</a></code> | <code>string</code> | Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl">cacheTtl</a></code> | <code>number</code> | Cache entry TTL in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk">chunk</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap">chunkOverlap</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize">chunkSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata">customMetadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel">embeddingModel</a></code> | <code>string</code> | Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod">fusionMethod</a></code> | <code>string</code> | Available values: "max", "rrf". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled">hybridSearchEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deprecated — use index_method instead. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions">indexingOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod">indexMethod</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | Controls which storage backends are used during indexing. Defaults to vector-only. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults">maxNumResults</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams">publicEndpointParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking">reranking</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel">rerankingModel</a></code> | <code>string</code> | Available values: "@cf/baai/bge-reranker-base", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions">retrievalOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel">rewriteModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery">rewriteQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold">scoreThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#source AiSearchInstance#source}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams">sourceParams</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization">summarization</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel">summarizationModel</a></code> | <code>string</code> | Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval">syncInterval</a></code> | <code>number</code> | Interval between automatic syncs, in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch">systemPromptAisearch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization">systemPromptIndexSummarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery">systemPromptRewriteQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId">tokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type">type</a></code> | <code>string</code> | Available values: "r2", "web-crawler". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#id AiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aiGatewayId`<sup>Optional</sup> <a name="aiGatewayId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aiGatewayId"></a>

```typescript
public readonly aiGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}.

---

##### `aisearchModel`<sup>Optional</sup> <a name="aisearchModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.aisearchModel"></a>

```typescript
public readonly aisearchModel: string;
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cache"></a>

```typescript
public readonly cache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}.

---

##### `cacheThreshold`<sup>Optional</sup> <a name="cacheThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheThreshold"></a>

```typescript
public readonly cacheThreshold: string;
```

- *Type:* string

Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}

---

##### `cacheTtl`<sup>Optional</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.cacheTtl"></a>

```typescript
public readonly cacheTtl: number;
```

- *Type:* number

Cache entry TTL in seconds.

Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
Available values: 600, 1800, 3600, 7200, 21600, 43200, 86400, 172800, 259200, 518400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#cache_ttl AiSearchInstance#cache_ttl}

---

##### `chunk`<sup>Optional</sup> <a name="chunk" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunk"></a>

```typescript
public readonly chunk: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}.

---

##### `chunkOverlap`<sup>Optional</sup> <a name="chunkOverlap" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkOverlap"></a>

```typescript
public readonly chunkOverlap: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}.

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.chunkSize"></a>

```typescript
public readonly chunkSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}.

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.customMetadata"></a>

```typescript
public readonly customMetadata: IResolvable | AiSearchInstanceCustomMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}.

---

##### `embeddingModel`<sup>Optional</sup> <a name="embeddingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.embeddingModel"></a>

```typescript
public readonly embeddingModel: string;
```

- *Type:* string

Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}

---

##### `fusionMethod`<sup>Optional</sup> <a name="fusionMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.fusionMethod"></a>

```typescript
public readonly fusionMethod: string;
```

- *Type:* string

Available values: "max", "rrf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}

---

##### `hybridSearchEnabled`<sup>Optional</sup> <a name="hybridSearchEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.hybridSearchEnabled"></a>

```typescript
public readonly hybridSearchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deprecated — use index_method instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}

---

##### `indexingOptions`<sup>Optional</sup> <a name="indexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexingOptions"></a>

```typescript
public readonly indexingOptions: AiSearchInstanceIndexingOptions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}.

---

##### `indexMethod`<sup>Optional</sup> <a name="indexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.indexMethod"></a>

```typescript
public readonly indexMethod: AiSearchInstanceIndexMethod;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

Controls which storage backends are used during indexing. Defaults to vector-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}

---

##### `maxNumResults`<sup>Optional</sup> <a name="maxNumResults" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.maxNumResults"></a>

```typescript
public readonly maxNumResults: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: AiSearchInstanceMetadata;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}.

---

##### `publicEndpointParams`<sup>Optional</sup> <a name="publicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.publicEndpointParams"></a>

```typescript
public readonly publicEndpointParams: AiSearchInstancePublicEndpointParams;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}.

---

##### `reranking`<sup>Optional</sup> <a name="reranking" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.reranking"></a>

```typescript
public readonly reranking: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}.

---

##### `rerankingModel`<sup>Optional</sup> <a name="rerankingModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rerankingModel"></a>

```typescript
public readonly rerankingModel: string;
```

- *Type:* string

Available values: "@cf/baai/bge-reranker-base", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}

---

##### `retrievalOptions`<sup>Optional</sup> <a name="retrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.retrievalOptions"></a>

```typescript
public readonly retrievalOptions: AiSearchInstanceRetrievalOptions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}.

---

##### `rewriteModel`<sup>Optional</sup> <a name="rewriteModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteModel"></a>

```typescript
public readonly rewriteModel: string;
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}

---

##### `rewriteQuery`<sup>Optional</sup> <a name="rewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.rewriteQuery"></a>

```typescript
public readonly rewriteQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}.

---

##### `scoreThreshold`<sup>Optional</sup> <a name="scoreThreshold" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.scoreThreshold"></a>

```typescript
public readonly scoreThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#source AiSearchInstance#source}.

---

##### `sourceParams`<sup>Optional</sup> <a name="sourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.sourceParams"></a>

```typescript
public readonly sourceParams: AiSearchInstanceSourceParams;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}.

---

##### `summarization`<sup>Optional</sup> <a name="summarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarization"></a>

```typescript
public readonly summarization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}.

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.summarizationModel"></a>

```typescript
public readonly summarizationModel: string;
```

- *Type:* string

Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}

---

##### `syncInterval`<sup>Optional</sup> <a name="syncInterval" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.syncInterval"></a>

```typescript
public readonly syncInterval: number;
```

- *Type:* number

Interval between automatic syncs, in seconds.

Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}

---

##### `systemPromptAisearch`<sup>Optional</sup> <a name="systemPromptAisearch" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptAisearch"></a>

```typescript
public readonly systemPromptAisearch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}.

---

##### `systemPromptIndexSummarization`<sup>Optional</sup> <a name="systemPromptIndexSummarization" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptIndexSummarization"></a>

```typescript
public readonly systemPromptIndexSummarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}.

---

##### `systemPromptRewriteQuery`<sup>Optional</sup> <a name="systemPromptRewriteQuery" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.systemPromptRewriteQuery"></a>

```typescript
public readonly systemPromptRewriteQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}.

---

##### `tokenId`<sup>Optional</sup> <a name="tokenId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "r2", "web-crawler".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#type AiSearchInstance#type}

---

### AiSearchInstanceCustomMetadata <a name="AiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceCustomMetadata: aiSearchInstance.AiSearchInstanceCustomMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType">dataType</a></code> | <code>string</code> | Available values: "text", "number", "boolean", "datetime". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Available values: "text", "number", "boolean", "datetime".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}.

---

### AiSearchInstanceIndexingOptions <a name="AiSearchInstanceIndexingOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceIndexingOptions: aiSearchInstance.AiSearchInstanceIndexingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer">keywordTokenizer</a></code> | <code>string</code> | Tokenizer used for keyword search indexing. |

---

##### `keywordTokenizer`<sup>Optional</sup> <a name="keywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions.property.keywordTokenizer"></a>

```typescript
public readonly keywordTokenizer: string;
```

- *Type:* string

Tokenizer used for keyword search indexing.

porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
Available values: "porter", "trigram".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#keyword_tokenizer AiSearchInstance#keyword_tokenizer}

---

### AiSearchInstanceIndexMethod <a name="AiSearchInstanceIndexMethod" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceIndexMethod: aiSearchInstance.AiSearchInstanceIndexMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword">keyword</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable keyword (BM25) storage backend. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector">vector</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable vector (embedding) storage backend. |

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.keyword"></a>

```typescript
public readonly keyword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable keyword (BM25) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#keyword AiSearchInstance#keyword}

---

##### `vector`<sup>Required</sup> <a name="vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod.property.vector"></a>

```typescript
public readonly vector: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable vector (embedding) storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#vector AiSearchInstance#vector}

---

### AiSearchInstanceMetadata <a name="AiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceMetadata: aiSearchInstance.AiSearchInstanceMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard">createdFromAisearchWizard</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain">workerDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}. |

---

##### `createdFromAisearchWizard`<sup>Optional</sup> <a name="createdFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.createdFromAisearchWizard"></a>

```typescript
public readonly createdFromAisearchWizard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}.

---

##### `workerDomain`<sup>Optional</sup> <a name="workerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata.property.workerDomain"></a>

```typescript
public readonly workerDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}.

---

### AiSearchInstancePublicEndpointParams <a name="AiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstancePublicEndpointParams: aiSearchInstance.AiSearchInstancePublicEndpointParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts">authorizedHosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint">chatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit">rateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint">searchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}. |

---

##### `authorizedHosts`<sup>Optional</sup> <a name="authorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.authorizedHosts"></a>

```typescript
public readonly authorizedHosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}.

---

##### `chatCompletionsEndpoint`<sup>Optional</sup> <a name="chatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.chatCompletionsEndpoint"></a>

```typescript
public readonly chatCompletionsEndpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}.

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.mcp"></a>

```typescript
public readonly mcp: AiSearchInstancePublicEndpointParamsMcp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.rateLimit"></a>

```typescript
public readonly rateLimit: AiSearchInstancePublicEndpointParamsRateLimit;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}.

---

##### `searchEndpoint`<sup>Optional</sup> <a name="searchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams.property.searchEndpoint"></a>

```typescript
public readonly searchEndpoint: AiSearchInstancePublicEndpointParamsSearchEndpoint;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}.

---

### AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstancePublicEndpointParamsChatCompletionsEndpoint: aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable chat completions endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable chat completions endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsMcp <a name="AiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstancePublicEndpointParamsMcp: aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#description AiSearchInstance#description}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable MCP endpoint for this public endpoint. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#description AiSearchInstance#description}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable MCP endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstancePublicEndpointParamsRateLimit <a name="AiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstancePublicEndpointParamsRateLimit: aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs">periodMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests">requests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique">technique</a></code> | <code>string</code> | Available values: "fixed", "sliding". |

---

##### `periodMs`<sup>Optional</sup> <a name="periodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.periodMs"></a>

```typescript
public readonly periodMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit.property.technique"></a>

```typescript
public readonly technique: string;
```

- *Type:* string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}

---

### AiSearchInstancePublicEndpointParamsSearchEndpoint <a name="AiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstancePublicEndpointParamsSearchEndpoint: aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable search endpoint for this public endpoint. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable search endpoint for this public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}

---

### AiSearchInstanceRetrievalOptions <a name="AiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceRetrievalOptions: aiSearchInstance.AiSearchInstanceRetrievalOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy">boostBy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | Metadata fields to boost search results by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode">keywordMatchMode</a></code> | <code>string</code> | Controls which documents are candidates for BM25 scoring. |

---

##### `boostBy`<sup>Optional</sup> <a name="boostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.boostBy"></a>

```typescript
public readonly boostBy: IResolvable | AiSearchInstanceRetrievalOptionsBoostBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

Metadata fields to boost search results by.

Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#boost_by AiSearchInstance#boost_by}

---

##### `keywordMatchMode`<sup>Optional</sup> <a name="keywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions.property.keywordMatchMode"></a>

```typescript
public readonly keywordMatchMode: string;
```

- *Type:* string

Controls which documents are candidates for BM25 scoring.

'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
Available values: "and", "or".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#keyword_match_mode AiSearchInstance#keyword_match_mode}

---

### AiSearchInstanceRetrievalOptionsBoostBy <a name="AiSearchInstanceRetrievalOptionsBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceRetrievalOptionsBoostBy: aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field">field</a></code> | <code>string</code> | Metadata field name to boost by. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction">direction</a></code> | <code>string</code> | Boost direction. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Metadata field name to boost by.

Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#field AiSearchInstance#field}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Boost direction.

'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
Available values: "asc", "desc", "exists", "not_exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#direction AiSearchInstance#direction}

---

### AiSearchInstanceSourceParams <a name="AiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParams: aiSearchInstance.AiSearchInstanceSourceParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems">excludeItems</a></code> | <code>string[]</code> | List of path patterns to exclude. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems">includeItems</a></code> | <code>string[]</code> | List of path patterns to include. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler">webCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}. |

---

##### `excludeItems`<sup>Optional</sup> <a name="excludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.excludeItems"></a>

```typescript
public readonly excludeItems: string[];
```

- *Type:* string[]

List of path patterns to exclude.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}

---

##### `includeItems`<sup>Optional</sup> <a name="includeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.includeItems"></a>

```typescript
public readonly includeItems: string[];
```

- *Type:* string[]

List of path patterns to include.

Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}.

---

##### `r2Jurisdiction`<sup>Optional</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.r2Jurisdiction"></a>

```typescript
public readonly r2Jurisdiction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `webCrawler`<sup>Optional</sup> <a name="webCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams.property.webCrawler"></a>

```typescript
public readonly webCrawler: AiSearchInstanceSourceParamsWebCrawler;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}.

---

### AiSearchInstanceSourceParamsWebCrawler <a name="AiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParamsWebCrawler: aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions">crawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions">parseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType">parseType</a></code> | <code>string</code> | Available values: "sitemap", "feed-rss", "crawl". |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}. |

---

##### `crawlOptions`<sup>Optional</sup> <a name="crawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.crawlOptions"></a>

```typescript
public readonly crawlOptions: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}.

---

##### `parseOptions`<sup>Optional</sup> <a name="parseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseOptions"></a>

```typescript
public readonly parseOptions: AiSearchInstanceSourceParamsWebCrawlerParseOptions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}.

---

##### `parseType`<sup>Optional</sup> <a name="parseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.parseType"></a>

```typescript
public readonly parseType: string;
```

- *Type:* string

Available values: "sitemap", "feed-rss", "crawl".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}

---

##### `storeOptions`<sup>Optional</sup> <a name="storeOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler.property.storeOptions"></a>

```typescript
public readonly storeOptions: AiSearchInstanceSourceParamsWebCrawlerStoreOptions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}.

---

### AiSearchInstanceSourceParamsWebCrawlerCrawlOptions <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParamsWebCrawlerCrawlOptions: aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth">depth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks">includeExternalLinks</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains">includeSubdomains</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge">maxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source">source</a></code> | <code>string</code> | Available values: "all", "sitemaps", "links". |

---

##### `depth`<sup>Optional</sup> <a name="depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}.

---

##### `includeExternalLinks`<sup>Optional</sup> <a name="includeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeExternalLinks"></a>

```typescript
public readonly includeExternalLinks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}.

---

##### `includeSubdomains`<sup>Optional</sup> <a name="includeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.includeSubdomains"></a>

```typescript
public readonly includeSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Available values: "all", "sitemaps", "links".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#source AiSearchInstance#source}

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParamsWebCrawlerParseOptions: aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector">contentSelector</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | List of path-to-selector mappings for extracting specific content from crawled pages. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders">includeHeaders</a></code> | <code>{[ key: string ]: string}</code> | Up to 5 custom HTTP headers sent with each crawl request. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages">includeImages</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps">specificSitemaps</a></code> | <code>string[]</code> | List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering">useBrowserRendering</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}. |

---

##### `contentSelector`<sup>Optional</sup> <a name="contentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.contentSelector"></a>

```typescript
public readonly contentSelector: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

List of path-to-selector mappings for extracting specific content from crawled pages.

Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#content_selector AiSearchInstance#content_selector}

---

##### `includeHeaders`<sup>Optional</sup> <a name="includeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeHeaders"></a>

```typescript
public readonly includeHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Up to 5 custom HTTP headers sent with each crawl request.

Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}

---

##### `includeImages`<sup>Optional</sup> <a name="includeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.includeImages"></a>

```typescript
public readonly includeImages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}.

---

##### `specificSitemaps`<sup>Optional</sup> <a name="specificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.specificSitemaps"></a>

```typescript
public readonly specificSitemaps: string[];
```

- *Type:* string[]

List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}

---

##### `useBrowserRendering`<sup>Optional</sup> <a name="useBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions.property.useBrowserRendering"></a>

```typescript
public readonly useBrowserRendering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}.

---

### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector: aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path">path</a></code> | <code>string</code> | Glob pattern to match against the page URL path. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector">selector</a></code> | <code>string</code> | CSS selector to extract content from pages matching the path pattern. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Glob pattern to match against the page URL path.

Uses standard glob syntax: * matches within a segment, ** crosses directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#path AiSearchInstance#path}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

CSS selector to extract content from pages matching the path pattern.

Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#selector AiSearchInstance#selector}

---

### AiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

const aiSearchInstanceSourceParamsWebCrawlerStoreOptions: aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId">storageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType">storageType</a></code> | <code>string</code> | Available values: "r2". |

---

##### `storageId`<sup>Required</sup> <a name="storageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageId"></a>

```typescript
public readonly storageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}.

---

##### `r2Jurisdiction`<sup>Optional</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.r2Jurisdiction"></a>

```typescript
public readonly r2Jurisdiction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchInstanceCustomMetadataList <a name="AiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceCustomMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get"></a>

```typescript
public get(index: number): AiSearchInstanceCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceCustomMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>[]

---


### AiSearchInstanceCustomMetadataOutputReference <a name="AiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceCustomMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceCustomMetadata">AiSearchInstanceCustomMetadata</a>

---


### AiSearchInstanceIndexingOptionsOutputReference <a name="AiSearchInstanceIndexingOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeywordTokenizer` <a name="resetKeywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.resetKeywordTokenizer"></a>

```typescript
public resetKeywordTokenizer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput">keywordTokenizerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer">keywordTokenizer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywordTokenizerInput`<sup>Optional</sup> <a name="keywordTokenizerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizerInput"></a>

```typescript
public readonly keywordTokenizerInput: string;
```

- *Type:* string

---

##### `keywordTokenizer`<sup>Required</sup> <a name="keywordTokenizer" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.keywordTokenizer"></a>

```typescript
public readonly keywordTokenizer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceIndexingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexingOptions">AiSearchInstanceIndexingOptions</a>

---


### AiSearchInstanceIndexMethodOutputReference <a name="AiSearchInstanceIndexMethodOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceIndexMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput">keywordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput">vectorInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword">keyword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector">vector</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keywordInput"></a>

```typescript
public readonly keywordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vectorInput`<sup>Optional</sup> <a name="vectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vectorInput"></a>

```typescript
public readonly vectorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.keyword"></a>

```typescript
public readonly keyword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vector`<sup>Required</sup> <a name="vector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.vector"></a>

```typescript
public readonly vector: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceIndexMethod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceIndexMethod">AiSearchInstanceIndexMethod</a>

---


### AiSearchInstanceMetadataOutputReference <a name="AiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatedFromAisearchWizard` <a name="resetCreatedFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetCreatedFromAisearchWizard"></a>

```typescript
public resetCreatedFromAisearchWizard(): void
```

##### `resetWorkerDomain` <a name="resetWorkerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.resetWorkerDomain"></a>

```typescript
public resetWorkerDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput">createdFromAisearchWizardInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput">workerDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">createdFromAisearchWizard</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain">workerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdFromAisearchWizardInput`<sup>Optional</sup> <a name="createdFromAisearchWizardInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizardInput"></a>

```typescript
public readonly createdFromAisearchWizardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerDomainInput`<sup>Optional</sup> <a name="workerDomainInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomainInput"></a>

```typescript
public readonly workerDomainInput: string;
```

- *Type:* string

---

##### `createdFromAisearchWizard`<sup>Required</sup> <a name="createdFromAisearchWizard" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```typescript
public readonly createdFromAisearchWizard: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerDomain`<sup>Required</sup> <a name="workerDomain" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```typescript
public readonly workerDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceMetadata">AiSearchInstanceMetadata</a>

---


### AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### AiSearchInstancePublicEndpointParamsMcpOutputReference <a name="AiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstancePublicEndpointParamsMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---


### AiSearchInstancePublicEndpointParamsOutputReference <a name="AiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChatCompletionsEndpoint` <a name="putChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint"></a>

```typescript
public putChatCompletionsEndpoint(value: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putChatCompletionsEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `putMcp` <a name="putMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp"></a>

```typescript
public putMcp(value: AiSearchInstancePublicEndpointParamsMcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `putRateLimit` <a name="putRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit"></a>

```typescript
public putRateLimit(value: AiSearchInstancePublicEndpointParamsRateLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `putSearchEndpoint` <a name="putSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint"></a>

```typescript
public putSearchEndpoint(value: AiSearchInstancePublicEndpointParamsSearchEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.putSearchEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `resetAuthorizedHosts` <a name="resetAuthorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetAuthorizedHosts"></a>

```typescript
public resetAuthorizedHosts(): void
```

##### `resetChatCompletionsEndpoint` <a name="resetChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetChatCompletionsEndpoint"></a>

```typescript
public resetChatCompletionsEndpoint(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMcp` <a name="resetMcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetMcp"></a>

```typescript
public resetMcp(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```

##### `resetSearchEndpoint` <a name="resetSearchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.resetSearchEndpoint"></a>

```typescript
public resetSearchEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chatCompletionsEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">rateLimit</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">searchEndpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput">authorizedHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput">chatCompletionsEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput">mcpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput">searchEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">authorizedHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chatCompletionsEndpoint`<sup>Required</sup> <a name="chatCompletionsEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```typescript
public readonly chatCompletionsEndpoint: AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```typescript
public readonly mcp: AiSearchInstancePublicEndpointParamsMcpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcpOutputReference">AiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: AiSearchInstancePublicEndpointParamsRateLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference">AiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `searchEndpoint`<sup>Required</sup> <a name="searchEndpoint" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```typescript
public readonly searchEndpoint: AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `authorizedHostsInput`<sup>Optional</sup> <a name="authorizedHostsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHostsInput"></a>

```typescript
public readonly authorizedHostsInput: string[];
```

- *Type:* string[]

---

##### `chatCompletionsEndpointInput`<sup>Optional</sup> <a name="chatCompletionsEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpointInput"></a>

```typescript
public readonly chatCompletionsEndpointInput: IResolvable | AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mcpInput`<sup>Optional</sup> <a name="mcpInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.mcpInput"></a>

```typescript
public readonly mcpInput: IResolvable | AiSearchInstancePublicEndpointParamsMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsMcp">AiSearchInstancePublicEndpointParamsMcp</a>

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: IResolvable | AiSearchInstancePublicEndpointParamsRateLimit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---

##### `searchEndpointInput`<sup>Optional</sup> <a name="searchEndpointInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpointInput"></a>

```typescript
public readonly searchEndpointInput: IResolvable | AiSearchInstancePublicEndpointParamsSearchEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---

##### `authorizedHosts`<sup>Required</sup> <a name="authorizedHosts" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```typescript
public readonly authorizedHosts: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstancePublicEndpointParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParams">AiSearchInstancePublicEndpointParams</a>

---


### AiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="AiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriodMs` <a name="resetPeriodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetPeriodMs"></a>

```typescript
public resetPeriodMs(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.resetTechnique"></a>

```typescript
public resetTechnique(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput">periodMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput">requestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">periodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodMsInput`<sup>Optional</sup> <a name="periodMsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMsInput"></a>

```typescript
public readonly periodMsInput: number;
```

- *Type:* number

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: number;
```

- *Type:* number

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.techniqueInput"></a>

```typescript
public readonly techniqueInput: string;
```

- *Type:* string

---

##### `periodMs`<sup>Required</sup> <a name="periodMs" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```typescript
public readonly periodMs: number;
```

- *Type:* number

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```typescript
public readonly technique: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstancePublicEndpointParamsRateLimit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsRateLimit">AiSearchInstancePublicEndpointParamsRateLimit</a>

---


### AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstancePublicEndpointParamsSearchEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstancePublicEndpointParamsSearchEndpoint">AiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### AiSearchInstanceRetrievalOptionsBoostByList <a name="AiSearchInstanceRetrievalOptionsBoostByList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get"></a>

```typescript
public get(index: number): AiSearchInstanceRetrievalOptionsBoostByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceRetrievalOptionsBoostBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---


### AiSearchInstanceRetrievalOptionsBoostByOutputReference <a name="AiSearchInstanceRetrievalOptionsBoostByOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceRetrievalOptionsBoostBy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>

---


### AiSearchInstanceRetrievalOptionsOutputReference <a name="AiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoostBy` <a name="putBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy"></a>

```typescript
public putBoostBy(value: IResolvable | AiSearchInstanceRetrievalOptionsBoostBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.putBoostBy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---

##### `resetBoostBy` <a name="resetBoostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetBoostBy"></a>

```typescript
public resetBoostBy(): void
```

##### `resetKeywordMatchMode` <a name="resetKeywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.resetKeywordMatchMode"></a>

```typescript
public resetKeywordMatchMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy">boostBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput">boostByInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput">keywordMatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">keywordMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boostBy`<sup>Required</sup> <a name="boostBy" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostBy"></a>

```typescript
public readonly boostBy: AiSearchInstanceRetrievalOptionsBoostByList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostByList">AiSearchInstanceRetrievalOptionsBoostByList</a>

---

##### `boostByInput`<sup>Optional</sup> <a name="boostByInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.boostByInput"></a>

```typescript
public readonly boostByInput: IResolvable | AiSearchInstanceRetrievalOptionsBoostBy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsBoostBy">AiSearchInstanceRetrievalOptionsBoostBy</a>[]

---

##### `keywordMatchModeInput`<sup>Optional</sup> <a name="keywordMatchModeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchModeInput"></a>

```typescript
public readonly keywordMatchModeInput: string;
```

- *Type:* string

---

##### `keywordMatchMode`<sup>Required</sup> <a name="keywordMatchMode" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```typescript
public readonly keywordMatchMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceRetrievalOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceRetrievalOptions">AiSearchInstanceRetrievalOptions</a>

---


### AiSearchInstanceSourceParamsOutputReference <a name="AiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWebCrawler` <a name="putWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler"></a>

```typescript
public putWebCrawler(value: AiSearchInstanceSourceParamsWebCrawler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.putWebCrawler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `resetExcludeItems` <a name="resetExcludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetExcludeItems"></a>

```typescript
public resetExcludeItems(): void
```

##### `resetIncludeItems` <a name="resetIncludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetIncludeItems"></a>

```typescript
public resetIncludeItems(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetR2Jurisdiction` <a name="resetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetR2Jurisdiction"></a>

```typescript
public resetR2Jurisdiction(): void
```

##### `resetWebCrawler` <a name="resetWebCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.resetWebCrawler"></a>

```typescript
public resetWebCrawler(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler">webCrawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput">excludeItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput">includeItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput">r2JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput">webCrawlerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems">excludeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems">includeItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `webCrawler`<sup>Required</sup> <a name="webCrawler" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```typescript
public readonly webCrawler: AiSearchInstanceSourceParamsWebCrawlerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference">AiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `excludeItemsInput`<sup>Optional</sup> <a name="excludeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItemsInput"></a>

```typescript
public readonly excludeItemsInput: string[];
```

- *Type:* string[]

---

##### `includeItemsInput`<sup>Optional</sup> <a name="includeItemsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItemsInput"></a>

```typescript
public readonly includeItemsInput: string[];
```

- *Type:* string[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `r2JurisdictionInput`<sup>Optional</sup> <a name="r2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2JurisdictionInput"></a>

```typescript
public readonly r2JurisdictionInput: string;
```

- *Type:* string

---

##### `webCrawlerInput`<sup>Optional</sup> <a name="webCrawlerInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.webCrawlerInput"></a>

```typescript
public readonly webCrawlerInput: IResolvable | AiSearchInstanceSourceParamsWebCrawler;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---

##### `excludeItems`<sup>Required</sup> <a name="excludeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```typescript
public readonly excludeItems: string[];
```

- *Type:* string[]

---

##### `includeItems`<sup>Required</sup> <a name="includeItems" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```typescript
public readonly includeItems: string[];
```

- *Type:* string[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `r2Jurisdiction`<sup>Required</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```typescript
public readonly r2Jurisdiction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParams">AiSearchInstanceSourceParams</a>

---


### AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDepth` <a name="resetDepth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetDepth"></a>

```typescript
public resetDepth(): void
```

##### `resetIncludeExternalLinks` <a name="resetIncludeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeExternalLinks"></a>

```typescript
public resetIncludeExternalLinks(): void
```

##### `resetIncludeSubdomains` <a name="resetIncludeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetIncludeSubdomains"></a>

```typescript
public resetIncludeSubdomains(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput">depthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput">includeExternalLinksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput">includeSubdomainsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth">depth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks">includeExternalLinks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains">includeSubdomains</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `depthInput`<sup>Optional</sup> <a name="depthInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depthInput"></a>

```typescript
public readonly depthInput: number;
```

- *Type:* number

---

##### `includeExternalLinksInput`<sup>Optional</sup> <a name="includeExternalLinksInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinksInput"></a>

```typescript
public readonly includeExternalLinksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSubdomainsInput`<sup>Optional</sup> <a name="includeSubdomainsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomainsInput"></a>

```typescript
public readonly includeSubdomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `depth`<sup>Required</sup> <a name="depth" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

---

##### `includeExternalLinks`<sup>Required</sup> <a name="includeExternalLinks" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeExternalLinks"></a>

```typescript
public readonly includeExternalLinks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeSubdomains`<sup>Required</sup> <a name="includeSubdomains" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.includeSubdomains"></a>

```typescript
public readonly includeSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawlerCrawlOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrawlOptions` <a name="putCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions"></a>

```typescript
public putCrawlOptions(value: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putCrawlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `putParseOptions` <a name="putParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions"></a>

```typescript
public putParseOptions(value: AiSearchInstanceSourceParamsWebCrawlerParseOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putParseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `putStoreOptions` <a name="putStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions"></a>

```typescript
public putStoreOptions(value: AiSearchInstanceSourceParamsWebCrawlerStoreOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `resetCrawlOptions` <a name="resetCrawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetCrawlOptions"></a>

```typescript
public resetCrawlOptions(): void
```

##### `resetParseOptions` <a name="resetParseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseOptions"></a>

```typescript
public resetParseOptions(): void
```

##### `resetParseType` <a name="resetParseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetParseType"></a>

```typescript
public resetParseType(): void
```

##### `resetStoreOptions` <a name="resetStoreOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.resetStoreOptions"></a>

```typescript
public resetStoreOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions">crawlOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">parseOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput">crawlOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput">parseOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput">parseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput">storeOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">parseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlOptions`<sup>Required</sup> <a name="crawlOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptions"></a>

```typescript
public readonly crawlOptions: AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference</a>

---

##### `parseOptions`<sup>Required</sup> <a name="parseOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```typescript
public readonly parseOptions: AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `storeOptions`<sup>Required</sup> <a name="storeOptions" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```typescript
public readonly storeOptions: AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `crawlOptionsInput`<sup>Optional</sup> <a name="crawlOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.crawlOptionsInput"></a>

```typescript
public readonly crawlOptionsInput: IResolvable | AiSearchInstanceSourceParamsWebCrawlerCrawlOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerCrawlOptions">AiSearchInstanceSourceParamsWebCrawlerCrawlOptions</a>

---

##### `parseOptionsInput`<sup>Optional</sup> <a name="parseOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptionsInput"></a>

```typescript
public readonly parseOptionsInput: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---

##### `parseTypeInput`<sup>Optional</sup> <a name="parseTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseTypeInput"></a>

```typescript
public readonly parseTypeInput: string;
```

- *Type:* string

---

##### `storeOptionsInput`<sup>Optional</sup> <a name="storeOptionsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptionsInput"></a>

```typescript
public readonly storeOptionsInput: IResolvable | AiSearchInstanceSourceParamsWebCrawlerStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---

##### `parseType`<sup>Required</sup> <a name="parseType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```typescript
public readonly parseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawler;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawler">AiSearchInstanceSourceParamsWebCrawler</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get"></a>

```typescript
public get(index: number): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>

---


### AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentSelector` <a name="putContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector"></a>

```typescript
public putContentSelector(value: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.putContentSelector.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---

##### `resetContentSelector` <a name="resetContentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetContentSelector"></a>

```typescript
public resetContentSelector(): void
```

##### `resetIncludeHeaders` <a name="resetIncludeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeHeaders"></a>

```typescript
public resetIncludeHeaders(): void
```

##### `resetIncludeImages` <a name="resetIncludeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetIncludeImages"></a>

```typescript
public resetIncludeImages(): void
```

##### `resetSpecificSitemaps` <a name="resetSpecificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetSpecificSitemaps"></a>

```typescript
public resetSpecificSitemaps(): void
```

##### `resetUseBrowserRendering` <a name="resetUseBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resetUseBrowserRendering"></a>

```typescript
public resetUseBrowserRendering(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector">contentSelector</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput">contentSelectorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput">includeHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput">includeImagesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput">specificSitemapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput">useBrowserRenderingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">includeHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">includeImages</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">specificSitemaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">useBrowserRendering</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentSelector`<sup>Required</sup> <a name="contentSelector" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelector"></a>

```typescript
public readonly contentSelector: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList</a>

---

##### `contentSelectorInput`<sup>Optional</sup> <a name="contentSelectorInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.contentSelectorInput"></a>

```typescript
public readonly contentSelectorInput: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector">AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector</a>[]

---

##### `includeHeadersInput`<sup>Optional</sup> <a name="includeHeadersInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeadersInput"></a>

```typescript
public readonly includeHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeImagesInput`<sup>Optional</sup> <a name="includeImagesInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImagesInput"></a>

```typescript
public readonly includeImagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `specificSitemapsInput`<sup>Optional</sup> <a name="specificSitemapsInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemapsInput"></a>

```typescript
public readonly specificSitemapsInput: string[];
```

- *Type:* string[]

---

##### `useBrowserRenderingInput`<sup>Optional</sup> <a name="useBrowserRenderingInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRenderingInput"></a>

```typescript
public readonly useBrowserRenderingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeHeaders`<sup>Required</sup> <a name="includeHeaders" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```typescript
public readonly includeHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `includeImages`<sup>Required</sup> <a name="includeImages" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```typescript
public readonly includeImages: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `specificSitemaps`<sup>Required</sup> <a name="specificSitemaps" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```typescript
public readonly specificSitemaps: string[];
```

- *Type:* string[]

---

##### `useBrowserRendering`<sup>Required</sup> <a name="useBrowserRendering" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```typescript
public readonly useBrowserRendering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawlerParseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerParseOptions">AiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```typescript
import { aiSearchInstance } from '@cdktn/provider-cloudflare'

new aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetR2Jurisdiction` <a name="resetR2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetR2Jurisdiction"></a>

```typescript
public resetR2Jurisdiction(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resetStorageType"></a>

```typescript
public resetStorageType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput">r2JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput">storageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">r2Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">storageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `r2JurisdictionInput`<sup>Optional</sup> <a name="r2JurisdictionInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2JurisdictionInput"></a>

```typescript
public readonly r2JurisdictionInput: string;
```

- *Type:* string

---

##### `storageIdInput`<sup>Optional</sup> <a name="storageIdInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageIdInput"></a>

```typescript
public readonly storageIdInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `r2Jurisdiction`<sup>Required</sup> <a name="r2Jurisdiction" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```typescript
public readonly r2Jurisdiction: string;
```

- *Type:* string

---

##### `storageId`<sup>Required</sup> <a name="storageId" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```typescript
public readonly storageId: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchInstanceSourceParamsWebCrawlerStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiSearchInstance.AiSearchInstanceSourceParamsWebCrawlerStoreOptions">AiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---



