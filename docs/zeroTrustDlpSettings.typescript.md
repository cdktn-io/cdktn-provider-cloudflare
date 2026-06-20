# `zeroTrustDlpSettings` Submodule <a name="`zeroTrustDlpSettings` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpSettings <a name="ZeroTrustDlpSettings" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

new zeroTrustDlpSettings.ZeroTrustDlpSettings(scope: Construct, id: string, config: ZeroTrustDlpSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig">ZeroTrustDlpSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig">ZeroTrustDlpSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging">putPayloadLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetAiContextAnalysis">resetAiContextAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOcr">resetOcr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetPayloadLogging">resetPayloadLogging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPayloadLogging` <a name="putPayloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging"></a>

```typescript
public putPayloadLogging(value: ZeroTrustDlpSettingsPayloadLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

---

##### `resetAiContextAnalysis` <a name="resetAiContextAnalysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetAiContextAnalysis"></a>

```typescript
public resetAiContextAnalysis(): void
```

##### `resetOcr` <a name="resetOcr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOcr"></a>

```typescript
public resetOcr(): void
```

##### `resetPayloadLogging` <a name="resetPayloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetPayloadLogging"></a>

```typescript
public resetPayloadLogging(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustDlpSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLogging">payloadLogging</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference">ZeroTrustDlpSettingsPayloadLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysisInput">aiContextAnalysisInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocrInput">ocrInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLoggingInput">payloadLoggingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysis">aiContextAnalysis</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocr">ocr</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `payloadLogging`<sup>Required</sup> <a name="payloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLogging"></a>

```typescript
public readonly payloadLogging: ZeroTrustDlpSettingsPayloadLoggingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference">ZeroTrustDlpSettingsPayloadLoggingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aiContextAnalysisInput`<sup>Optional</sup> <a name="aiContextAnalysisInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysisInput"></a>

```typescript
public readonly aiContextAnalysisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ocrInput`<sup>Optional</sup> <a name="ocrInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocrInput"></a>

```typescript
public readonly ocrInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `payloadLoggingInput`<sup>Optional</sup> <a name="payloadLoggingInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLoggingInput"></a>

```typescript
public readonly payloadLoggingInput: IResolvable | ZeroTrustDlpSettingsPayloadLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aiContextAnalysis`<sup>Required</sup> <a name="aiContextAnalysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysis"></a>

```typescript
public readonly aiContextAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ocr`<sup>Required</sup> <a name="ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocr"></a>

```typescript
public readonly ocr: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpSettingsConfig <a name="ZeroTrustDlpSettingsConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.Initializer"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

const zeroTrustDlpSettingsConfig: zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.aiContextAnalysis">aiContextAnalysis</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether AI context analysis is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.ocr">ocr</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether OCR is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.payloadLogging">payloadLogging</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | Request model for payload log settings within the DLP settings endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}.

---

##### `aiContextAnalysis`<sup>Optional</sup> <a name="aiContextAnalysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.aiContextAnalysis"></a>

```typescript
public readonly aiContextAnalysis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether AI context analysis is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#ai_context_analysis ZeroTrustDlpSettings#ai_context_analysis}

---

##### `ocr`<sup>Optional</sup> <a name="ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.ocr"></a>

```typescript
public readonly ocr: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether OCR is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#ocr ZeroTrustDlpSettings#ocr}

---

##### `payloadLogging`<sup>Optional</sup> <a name="payloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.payloadLogging"></a>

```typescript
public readonly payloadLogging: ZeroTrustDlpSettingsPayloadLogging;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

Request model for payload log settings within the DLP settings endpoint.

Unlike the legacy endpoint, null and missing are treated identically here
(both mean "not provided" for PATCH, "reset to default" for PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#payload_logging ZeroTrustDlpSettings#payload_logging}

---

### ZeroTrustDlpSettingsPayloadLogging <a name="ZeroTrustDlpSettingsPayloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.Initializer"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

const zeroTrustDlpSettingsPayloadLogging: zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.maskingLevel">maskingLevel</a></code> | <code>string</code> | Masking level for payload logs. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.publicKey">publicKey</a></code> | <code>string</code> | Base64-encoded public key for encrypting payload logs. |

---

##### `maskingLevel`<sup>Optional</sup> <a name="maskingLevel" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.maskingLevel"></a>

```typescript
public readonly maskingLevel: string;
```

- *Type:* string

Masking level for payload logs.

`full`: The entire payload is masked.
- `partial`: Only partial payload content is masked.
- `clear`: No masking is applied to the payload content.
- `default`: DLP uses its default masking behavior.
Available values: "full", "partial", "clear", "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#masking_level ZeroTrustDlpSettings#masking_level}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Base64-encoded public key for encrypting payload logs.

Set to a non-empty base64 string to enable payload logging with the given key.
- Set to an empty string to disable payload logging.
- Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_settings#public_key ZeroTrustDlpSettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpSettingsPayloadLoggingOutputReference <a name="ZeroTrustDlpSettingsPayloadLoggingOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpSettings } from '@cdktn/provider-cloudflare'

new zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetMaskingLevel">resetMaskingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaskingLevel` <a name="resetMaskingLevel" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetMaskingLevel"></a>

```typescript
public resetMaskingLevel(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevelInput">maskingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevel">maskingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maskingLevelInput`<sup>Optional</sup> <a name="maskingLevelInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevelInput"></a>

```typescript
public readonly maskingLevelInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `maskingLevel`<sup>Required</sup> <a name="maskingLevel" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevel"></a>

```typescript
public readonly maskingLevel: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpSettingsPayloadLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

---



