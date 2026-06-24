# `zeroTrustDeviceDeploymentGroups` Submodule <a name="`zeroTrustDeviceDeploymentGroups` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDeploymentGroups <a name="ZeroTrustDeviceDeploymentGroups" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups(scope: Construct, id: string, config: ZeroTrustDeviceDeploymentGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig">ZeroTrustDeviceDeploymentGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig">ZeroTrustDeviceDeploymentGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig">putVersionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVersionConfig` <a name="putVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig"></a>

```typescript
public putVersionConfig(value: IResolvable | ZeroTrustDeviceDeploymentGroupsVersionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds"></a>

```typescript
public resetPolicyIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceDeploymentGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceDeploymentGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDeploymentGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig">versionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput">policyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput">versionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds">policyIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig"></a>

```typescript
public readonly versionConfig: ZeroTrustDeviceDeploymentGroupsVersionConfigList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput"></a>

```typescript
public readonly policyIdsInput: string[];
```

- *Type:* string[]

---

##### `versionConfigInput`<sup>Optional</sup> <a name="versionConfigInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput"></a>

```typescript
public readonly versionConfigInput: IResolvable | ZeroTrustDeviceDeploymentGroupsVersionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDeploymentGroupsConfig <a name="ZeroTrustDeviceDeploymentGroupsConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

const zeroTrustDeviceDeploymentGroupsConfig: zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name">name</a></code> | <code>string</code> | A user-friendly name for the deployment group. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig">versionConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | Contains at least one version configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds">policyIds</a></code> | <code>string[]</code> | Contains an optional list of policy IDs assigned to a group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-friendly name for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#name ZeroTrustDeviceDeploymentGroups#name}

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig"></a>

```typescript
public readonly versionConfig: IResolvable | ZeroTrustDeviceDeploymentGroupsVersionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

Contains at least one version configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version_config ZeroTrustDeviceDeploymentGroups#version_config}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

Contains an optional list of policy IDs assigned to a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#policy_ids ZeroTrustDeviceDeploymentGroups#policy_ids}

---

### ZeroTrustDeviceDeploymentGroupsVersionConfig <a name="ZeroTrustDeviceDeploymentGroupsVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

const zeroTrustDeviceDeploymentGroupsVersionConfig: zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment">targetEnvironment</a></code> | <code>string</code> | The target environment for the client version (e.g., windows, macos). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version">version</a></code> | <code>string</code> | The specific client version to deploy. |

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment"></a>

```typescript
public readonly targetEnvironment: string;
```

- *Type:* string

The target environment for the client version (e.g., windows, macos).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#target_environment ZeroTrustDeviceDeploymentGroups#target_environment}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The specific client version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version ZeroTrustDeviceDeploymentGroups#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDeploymentGroupsVersionConfigList <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get"></a>

```typescript
public get(index: number): ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDeploymentGroupsVersionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---


### ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceDeploymentGroups } from '@cdktn/provider-cloudflare'

new zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput">targetEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment">targetEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetEnvironmentInput`<sup>Optional</sup> <a name="targetEnvironmentInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput"></a>

```typescript
public readonly targetEnvironmentInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment"></a>

```typescript
public readonly targetEnvironment: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDeploymentGroupsVersionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>

---



