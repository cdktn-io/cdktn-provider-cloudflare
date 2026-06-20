# `zeroTrustDlpSensitivityLevelOrder` Submodule <a name="`zeroTrustDlpSensitivityLevelOrder` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpSensitivityLevelOrder <a name="ZeroTrustDlpSensitivityLevelOrder" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order cloudflare_zero_trust_dlp_sensitivity_level_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

new zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder(scope: Construct, id: string, config: ZeroTrustDlpSensitivityLevelOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig">ZeroTrustDlpSensitivityLevelOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig">ZeroTrustDlpSensitivityLevelOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpSensitivityLevelOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isConstruct"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformElement"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformResource"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustDlpSensitivityLevelOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpSensitivityLevelOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpSensitivityLevelOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpSensitivityLevelOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.levelIdsInput">levelIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupIdInput">sensitivityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.levelIds">levelIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `levelIdsInput`<sup>Optional</sup> <a name="levelIdsInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.levelIdsInput"></a>

```typescript
public readonly levelIdsInput: string[];
```

- *Type:* string[]

---

##### `sensitivityGroupIdInput`<sup>Optional</sup> <a name="sensitivityGroupIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupIdInput"></a>

```typescript
public readonly sensitivityGroupIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `levelIds`<sup>Required</sup> <a name="levelIds" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.levelIds"></a>

```typescript
public readonly levelIds: string[];
```

- *Type:* string[]

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpSensitivityLevelOrderConfig <a name="ZeroTrustDlpSensitivityLevelOrderConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.Initializer"></a>

```typescript
import { zeroTrustDlpSensitivityLevelOrder } from '@cdktn/provider-cloudflare'

const zeroTrustDlpSensitivityLevelOrderConfig: zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#account_id ZeroTrustDlpSensitivityLevelOrder#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.levelIds">levelIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#level_ids ZeroTrustDlpSensitivityLevelOrder#level_ids}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.sensitivityGroupId">sensitivityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#sensitivity_group_id ZeroTrustDlpSensitivityLevelOrder#sensitivity_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#account_id ZeroTrustDlpSensitivityLevelOrder#account_id}.

---

##### `levelIds`<sup>Required</sup> <a name="levelIds" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.levelIds"></a>

```typescript
public readonly levelIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#level_ids ZeroTrustDlpSensitivityLevelOrder#level_ids}.

---

##### `sensitivityGroupId`<sup>Required</sup> <a name="sensitivityGroupId" id="@cdktn/provider-cloudflare.zeroTrustDlpSensitivityLevelOrder.ZeroTrustDlpSensitivityLevelOrderConfig.property.sensitivityGroupId"></a>

```typescript
public readonly sensitivityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_sensitivity_level_order#sensitivity_group_id ZeroTrustDlpSensitivityLevelOrder#sensitivity_group_id}.

---



