# `aiGateway` Submodule <a name="`aiGateway` Submodule" id="@cdktn/provider-cloudflare.aiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGateway <a name="AiGateway" id="@cdktn/provider-cloudflare.aiGateway.AiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway cloudflare_ai_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGateway(scope: Construct, id: string, config: AiGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig">AiGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig">AiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp">putDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails">putGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel">putOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits">putSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe">putStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp">resetDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement">resetLogManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy">resetLogManagementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush">resetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey">resetLogpushPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel">resetOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique">resetRateLimitingTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff">resetRetryBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts">resetRetryMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits">resetSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId">resetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe">resetStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode">resetWorkersAiBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr">resetZdr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDlp` <a name="putDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp"></a>

```typescript
public putDlp(value: AiGatewayDlp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `putGuardrails` <a name="putGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails"></a>

```typescript
public putGuardrails(value: AiGatewayGuardrails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `putOtel` <a name="putOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel"></a>

```typescript
public putOtel(value: IResolvable | AiGatewayOtel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]

---

##### `putSpendLimits` <a name="putSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits"></a>

```typescript
public putSpendLimits(value: AiGatewaySpendLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `putStripe` <a name="putStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe"></a>

```typescript
public putStripe(value: AiGatewayStripe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetDlp` <a name="resetDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp"></a>

```typescript
public resetDlp(): void
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetLogManagement` <a name="resetLogManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement"></a>

```typescript
public resetLogManagement(): void
```

##### `resetLogManagementStrategy` <a name="resetLogManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy"></a>

```typescript
public resetLogManagementStrategy(): void
```

##### `resetLogpush` <a name="resetLogpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush"></a>

```typescript
public resetLogpush(): void
```

##### `resetLogpushPublicKey` <a name="resetLogpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey"></a>

```typescript
public resetLogpushPublicKey(): void
```

##### `resetOtel` <a name="resetOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel"></a>

```typescript
public resetOtel(): void
```

##### `resetRateLimitingTechnique` <a name="resetRateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique"></a>

```typescript
public resetRateLimitingTechnique(): void
```

##### `resetRetryBackoff` <a name="resetRetryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff"></a>

```typescript
public resetRetryBackoff(): void
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay"></a>

```typescript
public resetRetryDelay(): void
```

##### `resetRetryMaxAttempts` <a name="resetRetryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts"></a>

```typescript
public resetRetryMaxAttempts(): void
```

##### `resetSpendLimits` <a name="resetSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits"></a>

```typescript
public resetSpendLimits(): void
```

##### `resetStoreId` <a name="resetStoreId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId"></a>

```typescript
public resetStoreId(): void
```

##### `resetStripe` <a name="resetStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe"></a>

```typescript
public resetStripe(): void
```

##### `resetWorkersAiBillingMode` <a name="resetWorkersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode"></a>

```typescript
public resetWorkersAiBillingMode(): void
```

##### `resetZdr` <a name="resetZdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr"></a>

```typescript
public resetZdr(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

aiGateway.AiGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

aiGateway.AiGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

aiGateway.AiGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

aiGateway.AiGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel">otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput">authenticationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput">cacheInvalidateOnUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput">cacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput">collectLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput">dlpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput">guardrailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput">logManagementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput">logManagementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput">logpushInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput">logpushPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput">otelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput">rateLimitingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput">rateLimitingLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput">rateLimitingTechniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput">retryBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput">retryDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput">retryMaxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput">spendLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput">storeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput">stripeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput">workersAiBillingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput">zdrInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication">authentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl">cacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs">collectLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement">logManagement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy">logManagementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush">logpush</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey">logpushPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval">rateLimitingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit">rateLimitingLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff">retryBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay">retryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId">storeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode">workersAiBillingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr">zdr</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dlp`<sup>Required</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp"></a>

```typescript
public readonly dlp: AiGatewayDlpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails"></a>

```typescript
public readonly guardrails: AiGatewayGuardrailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a>

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `otel`<sup>Required</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel"></a>

```typescript
public readonly otel: AiGatewayOtelList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a>

---

##### `spendLimits`<sup>Required</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits"></a>

```typescript
public readonly spendLimits: AiGatewaySpendLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a>

---

##### `stripe`<sup>Required</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe"></a>

```typescript
public readonly stripe: AiGatewayStripeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheInvalidateOnUpdateInput`<sup>Optional</sup> <a name="cacheInvalidateOnUpdateInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput"></a>

```typescript
public readonly cacheInvalidateOnUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInput`<sup>Optional</sup> <a name="cacheTtlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput"></a>

```typescript
public readonly cacheTtlInput: number;
```

- *Type:* number

---

##### `collectLogsInput`<sup>Optional</sup> <a name="collectLogsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput"></a>

```typescript
public readonly collectLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dlpInput`<sup>Optional</sup> <a name="dlpInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput"></a>

```typescript
public readonly dlpInput: IResolvable | AiGatewayDlp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: IResolvable | AiGatewayGuardrails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logManagementInput`<sup>Optional</sup> <a name="logManagementInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput"></a>

```typescript
public readonly logManagementInput: number;
```

- *Type:* number

---

##### `logManagementStrategyInput`<sup>Optional</sup> <a name="logManagementStrategyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput"></a>

```typescript
public readonly logManagementStrategyInput: string;
```

- *Type:* string

---

##### `logpushInput`<sup>Optional</sup> <a name="logpushInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput"></a>

```typescript
public readonly logpushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logpushPublicKeyInput`<sup>Optional</sup> <a name="logpushPublicKeyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput"></a>

```typescript
public readonly logpushPublicKeyInput: string;
```

- *Type:* string

---

##### `otelInput`<sup>Optional</sup> <a name="otelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput"></a>

```typescript
public readonly otelInput: IResolvable | AiGatewayOtel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]

---

##### `rateLimitingIntervalInput`<sup>Optional</sup> <a name="rateLimitingIntervalInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput"></a>

```typescript
public readonly rateLimitingIntervalInput: number;
```

- *Type:* number

---

##### `rateLimitingLimitInput`<sup>Optional</sup> <a name="rateLimitingLimitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput"></a>

```typescript
public readonly rateLimitingLimitInput: number;
```

- *Type:* number

---

##### `rateLimitingTechniqueInput`<sup>Optional</sup> <a name="rateLimitingTechniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput"></a>

```typescript
public readonly rateLimitingTechniqueInput: string;
```

- *Type:* string

---

##### `retryBackoffInput`<sup>Optional</sup> <a name="retryBackoffInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput"></a>

```typescript
public readonly retryBackoffInput: string;
```

- *Type:* string

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput"></a>

```typescript
public readonly retryDelayInput: number;
```

- *Type:* number

---

##### `retryMaxAttemptsInput`<sup>Optional</sup> <a name="retryMaxAttemptsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput"></a>

```typescript
public readonly retryMaxAttemptsInput: number;
```

- *Type:* number

---

##### `spendLimitsInput`<sup>Optional</sup> <a name="spendLimitsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput"></a>

```typescript
public readonly spendLimitsInput: IResolvable | AiGatewaySpendLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput"></a>

```typescript
public readonly storeIdInput: string;
```

- *Type:* string

---

##### `stripeInput`<sup>Optional</sup> <a name="stripeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput"></a>

```typescript
public readonly stripeInput: IResolvable | AiGatewayStripe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `workersAiBillingModeInput`<sup>Optional</sup> <a name="workersAiBillingModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput"></a>

```typescript
public readonly workersAiBillingModeInput: string;
```

- *Type:* string

---

##### `zdrInput`<sup>Optional</sup> <a name="zdrInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput"></a>

```typescript
public readonly zdrInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication"></a>

```typescript
public readonly authentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate"></a>

```typescript
public readonly cacheInvalidateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl"></a>

```typescript
public readonly cacheTtl: number;
```

- *Type:* number

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs"></a>

```typescript
public readonly collectLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logManagement`<sup>Required</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement"></a>

```typescript
public readonly logManagement: number;
```

- *Type:* number

---

##### `logManagementStrategy`<sup>Required</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy"></a>

```typescript
public readonly logManagementStrategy: string;
```

- *Type:* string

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush"></a>

```typescript
public readonly logpush: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logpushPublicKey`<sup>Required</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey"></a>

```typescript
public readonly logpushPublicKey: string;
```

- *Type:* string

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval"></a>

```typescript
public readonly rateLimitingInterval: number;
```

- *Type:* number

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit"></a>

```typescript
public readonly rateLimitingLimit: number;
```

- *Type:* number

---

##### `rateLimitingTechnique`<sup>Required</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique"></a>

```typescript
public readonly rateLimitingTechnique: string;
```

- *Type:* string

---

##### `retryBackoff`<sup>Required</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff"></a>

```typescript
public readonly retryBackoff: string;
```

- *Type:* string

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

---

##### `retryMaxAttempts`<sup>Required</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts"></a>

```typescript
public readonly retryMaxAttempts: number;
```

- *Type:* number

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

---

##### `workersAiBillingMode`<sup>Required</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode"></a>

```typescript
public readonly workersAiBillingMode: string;
```

- *Type:* string

---

##### `zdr`<sup>Required</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr"></a>

```typescript
public readonly zdr: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayConfig <a name="AiGatewayConfig" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayConfig: aiGateway.AiGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl">cacheTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs">collectLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id">id</a></code> | <code>string</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval">rateLimitingInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit">rateLimitingLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication">authentication</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement">logManagement</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy">logManagementStrategy</a></code> | <code>string</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush">logpush</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey">logpushPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel">otel</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>string</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff">retryBackoff</a></code> | <code>string</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay">retryDelay</a></code> | <code>number</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>number</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId">storeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode">workersAiBillingMode</a></code> | <code>string</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr">zdr</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate"></a>

```typescript
public readonly cacheInvalidateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl"></a>

```typescript
public readonly cacheTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs"></a>

```typescript
public readonly collectLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval"></a>

```typescript
public readonly rateLimitingInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit"></a>

```typescript
public readonly rateLimitingLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication"></a>

```typescript
public readonly authentication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authentication AiGateway#authentication}.

---

##### `dlp`<sup>Optional</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp"></a>

```typescript
public readonly dlp: AiGatewayDlp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#dlp AiGateway#dlp}.

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails"></a>

```typescript
public readonly guardrails: AiGatewayGuardrails;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#guardrails AiGateway#guardrails}.

---

##### `logManagement`<sup>Optional</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement"></a>

```typescript
public readonly logManagement: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `logManagementStrategy`<sup>Optional</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy"></a>

```typescript
public readonly logManagementStrategy: string;
```

- *Type:* string

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush"></a>

```typescript
public readonly logpush: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `logpushPublicKey`<sup>Optional</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey"></a>

```typescript
public readonly logpushPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel"></a>

```typescript
public readonly otel: IResolvable | AiGatewayOtel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `rateLimitingTechnique`<sup>Optional</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique"></a>

```typescript
public readonly rateLimitingTechnique: string;
```

- *Type:* string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `retryBackoff`<sup>Optional</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff"></a>

```typescript
public readonly retryBackoff: string;
```

- *Type:* string

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `retryMaxAttempts`<sup>Optional</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts"></a>

```typescript
public readonly retryMaxAttempts: number;
```

- *Type:* number

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `spendLimits`<sup>Optional</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits"></a>

```typescript
public readonly spendLimits: AiGatewaySpendLimits;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe"></a>

```typescript
public readonly stripe: AiGatewayStripe;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `workersAiBillingMode`<sup>Optional</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode"></a>

```typescript
public readonly workersAiBillingMode: string;
```

- *Type:* string

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `zdr`<sup>Optional</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr"></a>

```typescript
public readonly zdr: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

### AiGatewayDlp <a name="AiGatewayDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayDlp: aiGateway.AiGatewayDlp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action">action</a></code> | <code>string</code> | Available values: "BLOCK", "FLAG". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies">policies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#policies AiGateway#policies}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles">profiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Available values: "BLOCK", "FLAG".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies"></a>

```typescript
public readonly policies: IResolvable | AiGatewayDlpPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#policies AiGateway#policies}.

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayDlpPolicies <a name="AiGatewayDlpPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayDlpPolicies: aiGateway.AiGatewayDlpPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action">action</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check">check</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#check AiGateway#check}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles">profiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check"></a>

```typescript
public readonly check: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#check AiGateway#check}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayGuardrails <a name="AiGatewayGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayGuardrails: aiGateway.AiGatewayGuardrails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#prompt AiGateway#prompt}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#response AiGateway#response}. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt"></a>

```typescript
public readonly prompt: AiGatewayGuardrailsPrompt;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#prompt AiGateway#prompt}.

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response"></a>

```typescript
public readonly response: AiGatewayGuardrailsResponse;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#response AiGateway#response}.

---

### AiGatewayGuardrailsPrompt <a name="AiGatewayGuardrailsPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayGuardrailsPrompt: aiGateway.AiGatewayGuardrailsPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1">p1</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1">s1</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10">s10</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11">s11</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12">s12</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13">s13</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2">s2</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3">s3</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4">s4</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5">s5</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6">s6</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7">s7</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8">s8</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9">s9</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1"></a>

```typescript
public readonly p1: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1"></a>

```typescript
public readonly s1: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10"></a>

```typescript
public readonly s10: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11"></a>

```typescript
public readonly s11: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12"></a>

```typescript
public readonly s12: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13"></a>

```typescript
public readonly s13: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2"></a>

```typescript
public readonly s2: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4"></a>

```typescript
public readonly s4: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5"></a>

```typescript
public readonly s5: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6"></a>

```typescript
public readonly s6: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7"></a>

```typescript
public readonly s7: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8"></a>

```typescript
public readonly s8: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9"></a>

```typescript
public readonly s9: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayGuardrailsResponse <a name="AiGatewayGuardrailsResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayGuardrailsResponse: aiGateway.AiGatewayGuardrailsResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1">p1</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1">s1</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10">s10</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11">s11</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12">s12</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13">s13</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2">s2</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3">s3</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4">s4</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5">s5</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6">s6</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7">s7</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8">s8</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9">s9</a></code> | <code>string</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1"></a>

```typescript
public readonly p1: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1"></a>

```typescript
public readonly s1: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10"></a>

```typescript
public readonly s10: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11"></a>

```typescript
public readonly s11: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12"></a>

```typescript
public readonly s12: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13"></a>

```typescript
public readonly s13: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2"></a>

```typescript
public readonly s2: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4"></a>

```typescript
public readonly s4: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5"></a>

```typescript
public readonly s5: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6"></a>

```typescript
public readonly s6: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7"></a>

```typescript
public readonly s7: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8"></a>

```typescript
public readonly s8: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9"></a>

```typescript
public readonly s9: string;
```

- *Type:* string

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayOtel <a name="AiGatewayOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayOtel: aiGateway.AiGatewayOtel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#headers AiGateway#headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#url AiGateway#url}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType">contentType</a></code> | <code>string</code> | Available values: "json", "protobuf". |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#headers AiGateway#headers}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#url AiGateway#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Available values: "json", "protobuf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#content_type AiGateway#content_type}

---

### AiGatewaySpendLimits <a name="AiGatewaySpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewaySpendLimits: aiGateway.AiGatewaySpendLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rules AiGateway#rules}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules"></a>

```typescript
public readonly rules: IResolvable | AiGatewaySpendLimitsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rules AiGateway#rules}.

---

### AiGatewaySpendLimitsRules <a name="AiGatewaySpendLimitsRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewaySpendLimitsRules: aiGateway.AiGatewaySpendLimitsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit AiGateway#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType">limitType</a></code> | <code>string</code> | Available values: "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window">window</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#window AiGateway#window}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider">aiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata">metadata</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#metadata AiGateway#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#model AiGateway#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique">technique</a></code> | <code>string</code> | Available values: "fixed", "sliding". |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit AiGateway#limit}.

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

Available values: "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit_type AiGateway#limit_type}

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#window AiGateway#window}.

---

##### `aiGatewayProvider`<sup>Optional</sup> <a name="aiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider"></a>

```typescript
public readonly aiGatewayProvider: AiGatewaySpendLimitsRulesAiGatewayProvider;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | {[ key: string ]: AiGatewaySpendLimitsRulesMetadata};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#metadata AiGateway#metadata}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model"></a>

```typescript
public readonly model: AiGatewaySpendLimitsRulesModel;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#model AiGateway#model}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique"></a>

```typescript
public readonly technique: string;
```

- *Type:* string

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#technique AiGateway#technique}

---

### AiGatewaySpendLimitsRulesAiGatewayProvider <a name="AiGatewaySpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewaySpendLimitsRulesAiGatewayProvider: aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode">mode</a></code> | <code>string</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesMetadata <a name="AiGatewaySpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewaySpendLimitsRulesMetadata: aiGateway.AiGatewaySpendLimitsRulesMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode">mode</a></code> | <code>string</code> | Available values: "partition", "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Available values: "partition", "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesModel <a name="AiGatewaySpendLimitsRulesModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewaySpendLimitsRulesModel: aiGateway.AiGatewaySpendLimitsRulesModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode">mode</a></code> | <code>string</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewayStripe <a name="AiGatewayStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayStripe: aiGateway.AiGatewayStripe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents">usageEvents</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `usageEvents`<sup>Required</sup> <a name="usageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents"></a>

```typescript
public readonly usageEvents: IResolvable | AiGatewayStripeUsageEvents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}.

---

### AiGatewayStripeUsageEvents <a name="AiGatewayStripeUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

const aiGatewayStripeUsageEvents: aiGateway.AiGatewayStripeUsageEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#payload AiGateway#payload}. |

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#payload AiGateway#payload}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDlpOutputReference <a name="AiGatewayDlpOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayDlpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | AiGatewayDlpPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles"></a>

```typescript
public resetProfiles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput">policiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies"></a>

```typescript
public readonly policies: AiGatewayDlpPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | AiGatewayDlpPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDlp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---


### AiGatewayDlpPoliciesList <a name="AiGatewayDlpPoliciesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayDlpPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get"></a>

```typescript
public get(index: number): AiGatewayDlpPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDlpPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>[]

---


### AiGatewayDlpPoliciesOutputReference <a name="AiGatewayDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayDlpPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput">checkInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check">check</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput"></a>

```typescript
public readonly checkInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check"></a>

```typescript
public readonly check: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayDlpPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>

---


### AiGatewayGuardrailsOutputReference <a name="AiGatewayGuardrailsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayGuardrailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse">putResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrompt` <a name="putPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt"></a>

```typescript
public putPrompt(value: AiGatewayGuardrailsPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `putResponse` <a name="putResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse"></a>

```typescript
public putResponse(value: AiGatewayGuardrailsResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput">promptInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput">responseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt"></a>

```typescript
public readonly prompt: AiGatewayGuardrailsPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response"></a>

```typescript
public readonly response: AiGatewayGuardrailsResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: IResolvable | AiGatewayGuardrailsPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: IResolvable | AiGatewayGuardrailsResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayGuardrails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---


### AiGatewayGuardrailsPromptOutputReference <a name="AiGatewayGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayGuardrailsPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1">resetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1">resetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10">resetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11">resetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12">resetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13">resetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2">resetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4">resetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5">resetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6">resetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7">resetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8">resetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9">resetS9</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetP1` <a name="resetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1"></a>

```typescript
public resetP1(): void
```

##### `resetS1` <a name="resetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1"></a>

```typescript
public resetS1(): void
```

##### `resetS10` <a name="resetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10"></a>

```typescript
public resetS10(): void
```

##### `resetS11` <a name="resetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11"></a>

```typescript
public resetS11(): void
```

##### `resetS12` <a name="resetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12"></a>

```typescript
public resetS12(): void
```

##### `resetS13` <a name="resetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13"></a>

```typescript
public resetS13(): void
```

##### `resetS2` <a name="resetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2"></a>

```typescript
public resetS2(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetS4` <a name="resetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4"></a>

```typescript
public resetS4(): void
```

##### `resetS5` <a name="resetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5"></a>

```typescript
public resetS5(): void
```

##### `resetS6` <a name="resetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6"></a>

```typescript
public resetS6(): void
```

##### `resetS7` <a name="resetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7"></a>

```typescript
public resetS7(): void
```

##### `resetS8` <a name="resetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8"></a>

```typescript
public resetS8(): void
```

##### `resetS9` <a name="resetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9"></a>

```typescript
public resetS9(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input">p1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input">s10Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input">s11Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input">s12Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input">s13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input">s1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input">s2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input">s3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input">s4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input">s5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input">s6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input">s7Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input">s8Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input">s9Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1">p1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1">s1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10">s10</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11">s11</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12">s12</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13">s13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2">s2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3">s3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4">s4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5">s5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6">s6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7">s7</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8">s8</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9">s9</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `p1Input`<sup>Optional</sup> <a name="p1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input"></a>

```typescript
public readonly p1Input: string;
```

- *Type:* string

---

##### `s10Input`<sup>Optional</sup> <a name="s10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input"></a>

```typescript
public readonly s10Input: string;
```

- *Type:* string

---

##### `s11Input`<sup>Optional</sup> <a name="s11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input"></a>

```typescript
public readonly s11Input: string;
```

- *Type:* string

---

##### `s12Input`<sup>Optional</sup> <a name="s12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input"></a>

```typescript
public readonly s12Input: string;
```

- *Type:* string

---

##### `s13Input`<sup>Optional</sup> <a name="s13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input"></a>

```typescript
public readonly s13Input: string;
```

- *Type:* string

---

##### `s1Input`<sup>Optional</sup> <a name="s1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input"></a>

```typescript
public readonly s1Input: string;
```

- *Type:* string

---

##### `s2Input`<sup>Optional</sup> <a name="s2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input"></a>

```typescript
public readonly s2Input: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: string;
```

- *Type:* string

---

##### `s4Input`<sup>Optional</sup> <a name="s4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input"></a>

```typescript
public readonly s4Input: string;
```

- *Type:* string

---

##### `s5Input`<sup>Optional</sup> <a name="s5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input"></a>

```typescript
public readonly s5Input: string;
```

- *Type:* string

---

##### `s6Input`<sup>Optional</sup> <a name="s6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input"></a>

```typescript
public readonly s6Input: string;
```

- *Type:* string

---

##### `s7Input`<sup>Optional</sup> <a name="s7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input"></a>

```typescript
public readonly s7Input: string;
```

- *Type:* string

---

##### `s8Input`<sup>Optional</sup> <a name="s8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input"></a>

```typescript
public readonly s8Input: string;
```

- *Type:* string

---

##### `s9Input`<sup>Optional</sup> <a name="s9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input"></a>

```typescript
public readonly s9Input: string;
```

- *Type:* string

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1"></a>

```typescript
public readonly p1: string;
```

- *Type:* string

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1"></a>

```typescript
public readonly s1: string;
```

- *Type:* string

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10"></a>

```typescript
public readonly s10: string;
```

- *Type:* string

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11"></a>

```typescript
public readonly s11: string;
```

- *Type:* string

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12"></a>

```typescript
public readonly s12: string;
```

- *Type:* string

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13"></a>

```typescript
public readonly s13: string;
```

- *Type:* string

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2"></a>

```typescript
public readonly s2: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4"></a>

```typescript
public readonly s4: string;
```

- *Type:* string

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5"></a>

```typescript
public readonly s5: string;
```

- *Type:* string

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6"></a>

```typescript
public readonly s6: string;
```

- *Type:* string

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7"></a>

```typescript
public readonly s7: string;
```

- *Type:* string

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8"></a>

```typescript
public readonly s8: string;
```

- *Type:* string

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9"></a>

```typescript
public readonly s9: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayGuardrailsPrompt;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---


### AiGatewayGuardrailsResponseOutputReference <a name="AiGatewayGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayGuardrailsResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1">resetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1">resetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10">resetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11">resetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12">resetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13">resetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2">resetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4">resetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5">resetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6">resetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7">resetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8">resetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9">resetS9</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetP1` <a name="resetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1"></a>

```typescript
public resetP1(): void
```

##### `resetS1` <a name="resetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1"></a>

```typescript
public resetS1(): void
```

##### `resetS10` <a name="resetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10"></a>

```typescript
public resetS10(): void
```

##### `resetS11` <a name="resetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11"></a>

```typescript
public resetS11(): void
```

##### `resetS12` <a name="resetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12"></a>

```typescript
public resetS12(): void
```

##### `resetS13` <a name="resetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13"></a>

```typescript
public resetS13(): void
```

##### `resetS2` <a name="resetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2"></a>

```typescript
public resetS2(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetS4` <a name="resetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4"></a>

```typescript
public resetS4(): void
```

##### `resetS5` <a name="resetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5"></a>

```typescript
public resetS5(): void
```

##### `resetS6` <a name="resetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6"></a>

```typescript
public resetS6(): void
```

##### `resetS7` <a name="resetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7"></a>

```typescript
public resetS7(): void
```

##### `resetS8` <a name="resetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8"></a>

```typescript
public resetS8(): void
```

##### `resetS9` <a name="resetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9"></a>

```typescript
public resetS9(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input">p1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input">s10Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input">s11Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input">s12Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input">s13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input">s1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input">s2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input">s3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input">s4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input">s5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input">s6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input">s7Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input">s8Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input">s9Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1">p1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1">s1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10">s10</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11">s11</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12">s12</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13">s13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2">s2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3">s3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4">s4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5">s5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6">s6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7">s7</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8">s8</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9">s9</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `p1Input`<sup>Optional</sup> <a name="p1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input"></a>

```typescript
public readonly p1Input: string;
```

- *Type:* string

---

##### `s10Input`<sup>Optional</sup> <a name="s10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input"></a>

```typescript
public readonly s10Input: string;
```

- *Type:* string

---

##### `s11Input`<sup>Optional</sup> <a name="s11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input"></a>

```typescript
public readonly s11Input: string;
```

- *Type:* string

---

##### `s12Input`<sup>Optional</sup> <a name="s12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input"></a>

```typescript
public readonly s12Input: string;
```

- *Type:* string

---

##### `s13Input`<sup>Optional</sup> <a name="s13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input"></a>

```typescript
public readonly s13Input: string;
```

- *Type:* string

---

##### `s1Input`<sup>Optional</sup> <a name="s1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input"></a>

```typescript
public readonly s1Input: string;
```

- *Type:* string

---

##### `s2Input`<sup>Optional</sup> <a name="s2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input"></a>

```typescript
public readonly s2Input: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: string;
```

- *Type:* string

---

##### `s4Input`<sup>Optional</sup> <a name="s4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input"></a>

```typescript
public readonly s4Input: string;
```

- *Type:* string

---

##### `s5Input`<sup>Optional</sup> <a name="s5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input"></a>

```typescript
public readonly s5Input: string;
```

- *Type:* string

---

##### `s6Input`<sup>Optional</sup> <a name="s6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input"></a>

```typescript
public readonly s6Input: string;
```

- *Type:* string

---

##### `s7Input`<sup>Optional</sup> <a name="s7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input"></a>

```typescript
public readonly s7Input: string;
```

- *Type:* string

---

##### `s8Input`<sup>Optional</sup> <a name="s8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input"></a>

```typescript
public readonly s8Input: string;
```

- *Type:* string

---

##### `s9Input`<sup>Optional</sup> <a name="s9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input"></a>

```typescript
public readonly s9Input: string;
```

- *Type:* string

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1"></a>

```typescript
public readonly p1: string;
```

- *Type:* string

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1"></a>

```typescript
public readonly s1: string;
```

- *Type:* string

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10"></a>

```typescript
public readonly s10: string;
```

- *Type:* string

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11"></a>

```typescript
public readonly s11: string;
```

- *Type:* string

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12"></a>

```typescript
public readonly s12: string;
```

- *Type:* string

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13"></a>

```typescript
public readonly s13: string;
```

- *Type:* string

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2"></a>

```typescript
public readonly s2: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4"></a>

```typescript
public readonly s4: string;
```

- *Type:* string

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5"></a>

```typescript
public readonly s5: string;
```

- *Type:* string

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6"></a>

```typescript
public readonly s6: string;
```

- *Type:* string

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7"></a>

```typescript
public readonly s7: string;
```

- *Type:* string

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8"></a>

```typescript
public readonly s8: string;
```

- *Type:* string

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9"></a>

```typescript
public readonly s9: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayGuardrailsResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


### AiGatewayOtelList <a name="AiGatewayOtelList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayOtelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get"></a>

```typescript
public get(index: number): AiGatewayOtelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayOtel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>[]

---


### AiGatewayOtelOutputReference <a name="AiGatewayOtelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayOtelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayOtel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>

---


### AiGatewaySpendLimitsOutputReference <a name="AiGatewaySpendLimitsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | AiGatewaySpendLimitsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules"></a>

```typescript
public readonly rules: AiGatewaySpendLimitsRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | AiGatewaySpendLimitsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---


### AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference <a name="AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimitsRulesAiGatewayProvider;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---


### AiGatewaySpendLimitsRulesList <a name="AiGatewaySpendLimitsRulesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get"></a>

```typescript
public get(index: number): AiGatewaySpendLimitsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimitsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>[]

---


### AiGatewaySpendLimitsRulesMetadataMap <a name="AiGatewaySpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesMetadataMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get"></a>

```typescript
public get(key: string): AiGatewaySpendLimitsRulesMetadataOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: AiGatewaySpendLimitsRulesMetadata};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}

---


### AiGatewaySpendLimitsRulesMetadataOutputReference <a name="AiGatewaySpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimitsRulesMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>

---


### AiGatewaySpendLimitsRulesModelOutputReference <a name="AiGatewaySpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimitsRulesModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---


### AiGatewaySpendLimitsRulesOutputReference <a name="AiGatewaySpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewaySpendLimitsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider">putAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel">putModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider">resetAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique">resetTechnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiGatewayProvider` <a name="putAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider"></a>

```typescript
public putAiGatewayProvider(value: AiGatewaySpendLimitsRulesAiGatewayProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | {[ key: string ]: AiGatewaySpendLimitsRulesMetadata}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}

---

##### `putModel` <a name="putModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel"></a>

```typescript
public putModel(value: AiGatewaySpendLimitsRulesModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `resetAiGatewayProvider` <a name="resetAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider"></a>

```typescript
public resetAiGatewayProvider(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique"></a>

```typescript
public resetTechnique(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider">aiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput">aiGatewayProviderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput">limitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput">modelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput">windowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique">technique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window">window</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiGatewayProvider`<sup>Required</sup> <a name="aiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```typescript
public readonly aiGatewayProvider: AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: AiGatewaySpendLimitsRulesMetadataMap;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model"></a>

```typescript
public readonly model: AiGatewaySpendLimitsRulesModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a>

---

##### `aiGatewayProviderInput`<sup>Optional</sup> <a name="aiGatewayProviderInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput"></a>

```typescript
public readonly aiGatewayProviderInput: IResolvable | AiGatewaySpendLimitsRulesAiGatewayProvider;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput"></a>

```typescript
public readonly limitTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | {[ key: string ]: AiGatewaySpendLimitsRulesMetadata};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>}

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: IResolvable | AiGatewaySpendLimitsRulesModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput"></a>

```typescript
public readonly techniqueInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique"></a>

```typescript
public readonly technique: string;
```

- *Type:* string

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewaySpendLimitsRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>

---


### AiGatewayStripeOutputReference <a name="AiGatewayStripeOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayStripeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents">putUsageEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsageEvents` <a name="putUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents"></a>

```typescript
public putUsageEvents(value: IResolvable | AiGatewayStripeUsageEvents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents">usageEvents</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput">usageEventsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usageEvents`<sup>Required</sup> <a name="usageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents"></a>

```typescript
public readonly usageEvents: AiGatewayStripeUsageEventsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `usageEventsInput`<sup>Optional</sup> <a name="usageEventsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput"></a>

```typescript
public readonly usageEventsInput: IResolvable | AiGatewayStripeUsageEvents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayStripe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---


### AiGatewayStripeUsageEventsList <a name="AiGatewayStripeUsageEventsList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayStripeUsageEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get"></a>

```typescript
public get(index: number): AiGatewayStripeUsageEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayStripeUsageEvents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>[]

---


### AiGatewayStripeUsageEventsOutputReference <a name="AiGatewayStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer"></a>

```typescript
import { aiGateway } from '@cdktn/provider-cloudflare'

new aiGateway.AiGatewayStripeUsageEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayStripeUsageEvents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>

---



