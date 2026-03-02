# `magicWanGreTunnel` Submodule <a name="`magicWanGreTunnel` Submodule" id="@cdktn/provider-cloudflare.magicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanGreTunnel <a name="MagicWanGreTunnel" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

new magicWanGreTunnel.MagicWanGreTunnel(scope: Construct, id: string, config: MagicWanGreTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig">MagicWanGreTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig">MagicWanGreTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetAutomaticReturnRouting">resetAutomaticReturnRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress6">resetInterfaceAddress6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgp` <a name="putBgp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putBgp"></a>

```typescript
public putBgp(value: MagicWanGreTunnelBgp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck"></a>

```typescript
public putHealthCheck(value: MagicWanGreTunnelHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `resetAutomaticReturnRouting` <a name="resetAutomaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetAutomaticReturnRouting"></a>

```typescript
public resetAutomaticReturnRouting(): void
```

##### `resetBgp` <a name="resetBgp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetBgp"></a>

```typescript
public resetBgp(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetInterfaceAddress6` <a name="resetInterfaceAddress6" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress6"></a>

```typescript
public resetInterfaceAddress6(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicWanGreTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

magicWanGreTunnel.MagicWanGreTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MagicWanGreTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanGreTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanGreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanGreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference">MagicWanGreTunnelBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgpStatus">bgpStatus</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference">MagicWanGreTunnelBgpStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.automaticReturnRoutingInput">automaticReturnRoutingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgpInput">bgpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput">cloudflareGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput">customerGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput">healthCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6Input">interfaceAddress6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput">interfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.automaticReturnRouting">automaticReturnRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6">interfaceAddress6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgp"></a>

```typescript
public readonly bgp: MagicWanGreTunnelBgpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference">MagicWanGreTunnelBgpOutputReference</a>

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgpStatus"></a>

```typescript
public readonly bgpStatus: MagicWanGreTunnelBgpStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference">MagicWanGreTunnelBgpStatusOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck"></a>

```typescript
public readonly healthCheck: MagicWanGreTunnelHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `automaticReturnRoutingInput`<sup>Optional</sup> <a name="automaticReturnRoutingInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.automaticReturnRoutingInput"></a>

```typescript
public readonly automaticReturnRoutingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.bgpInput"></a>

```typescript
public readonly bgpInput: IResolvable | MagicWanGreTunnelBgp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a>

---

##### `cloudflareGreEndpointInput`<sup>Optional</sup> <a name="cloudflareGreEndpointInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput"></a>

```typescript
public readonly cloudflareGreEndpointInput: string;
```

- *Type:* string

---

##### `customerGreEndpointInput`<sup>Optional</sup> <a name="customerGreEndpointInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput"></a>

```typescript
public readonly customerGreEndpointInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: IResolvable | MagicWanGreTunnelHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `interfaceAddress6Input`<sup>Optional</sup> <a name="interfaceAddress6Input" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6Input"></a>

```typescript
public readonly interfaceAddress6Input: string;
```

- *Type:* string

---

##### `interfaceAddressInput`<sup>Optional</sup> <a name="interfaceAddressInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput"></a>

```typescript
public readonly interfaceAddressInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `automaticReturnRouting`<sup>Required</sup> <a name="automaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.automaticReturnRouting"></a>

```typescript
public readonly automaticReturnRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint"></a>

```typescript
public readonly cloudflareGreEndpoint: string;
```

- *Type:* string

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint"></a>

```typescript
public readonly customerGreEndpoint: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

---

##### `interfaceAddress6`<sup>Required</sup> <a name="interfaceAddress6" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6"></a>

```typescript
public readonly interfaceAddress6: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanGreTunnelBgp <a name="MagicWanGreTunnelBgp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

const magicWanGreTunnelBgp: magicWanGreTunnel.MagicWanGreTunnelBgp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.customerAsn">customerAsn</a></code> | <code>number</code> | ASN used on the customer end of the BGP session. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.extraPrefixes">extraPrefixes</a></code> | <code>string[]</code> | Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.md5Key">md5Key</a></code> | <code>string</code> | MD5 key to use for session authentication. |

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

ASN used on the customer end of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#customer_asn MagicWanGreTunnel#customer_asn}

---

##### `extraPrefixes`<sup>Optional</sup> <a name="extraPrefixes" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.extraPrefixes"></a>

```typescript
public readonly extraPrefixes: string[];
```

- *Type:* string[]

Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#extra_prefixes MagicWanGreTunnel#extra_prefixes}

---

##### `md5Key`<sup>Optional</sup> <a name="md5Key" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp.property.md5Key"></a>

```typescript
public readonly md5Key: string;
```

- *Type:* string

MD5 key to use for session authentication.

Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
key is not treated as a secret value. This is *only* supported for preventing
misconfiguration, not for defending against malicious attacks.

The MD5 key, if set, must be of non-zero length and consist only of the following types of
character:

* ASCII alphanumerics: `[a-zA-Z0-9]`
* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= \|`

In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
these disallowed characters will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#md5_key MagicWanGreTunnel#md5_key}

---

### MagicWanGreTunnelBgpStatus <a name="MagicWanGreTunnelBgpStatus" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatus.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

const magicWanGreTunnelBgpStatus: magicWanGreTunnel.MagicWanGreTunnelBgpStatus = { ... }
```


### MagicWanGreTunnelConfig <a name="MagicWanGreTunnelConfig" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

const magicWanGreTunnelConfig: magicWanGreTunnel.MagicWanGreTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name">name</a></code> | <code>string</code> | The name of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.automaticReturnRouting">automaticReturnRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | True if automatic stateful return routing should be enabled for a tunnel, false otherwise. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#bgp MagicWanGreTunnel#bgp}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress6">interfaceAddress6</a></code> | <code>string</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu">mtu</a></code> | <code>number</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl">ttl</a></code> | <code>number</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint"></a>

```typescript
public readonly cloudflareGreEndpoint: string;
```

- *Type:* string

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint"></a>

```typescript
public readonly customerGreEndpoint: string;
```

- *Type:* string

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `automaticReturnRouting`<sup>Optional</sup> <a name="automaticReturnRouting" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.automaticReturnRouting"></a>

```typescript
public readonly automaticReturnRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

True if automatic stateful return routing should be enabled for a tunnel, false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#automatic_return_routing MagicWanGreTunnel#automatic_return_routing}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.bgp"></a>

```typescript
public readonly bgp: MagicWanGreTunnelBgp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#bgp MagicWanGreTunnel#bgp}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: MagicWanGreTunnelHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `interfaceAddress6`<sup>Optional</sup> <a name="interfaceAddress6" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress6"></a>

```typescript
public readonly interfaceAddress6: string;
```

- *Type:* string

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#interface_address6 MagicWanGreTunnel#interface_address6}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

### MagicWanGreTunnelHealthCheck <a name="MagicWanGreTunnelHealthCheck" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

const magicWanGreTunnelHealthCheck: magicWanGreTunnel.MagicWanGreTunnelHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction">direction</a></code> | <code>string</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate">rate</a></code> | <code>string</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type">type</a></code> | <code>string</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target"></a>

```typescript
public readonly target: MagicWanGreTunnelHealthCheckTarget;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}

---

### MagicWanGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelHealthCheckTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

const magicWanGreTunnelHealthCheckTarget: magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>string</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved"></a>

```typescript
public readonly saved: string;
```

- *Type:* string

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanGreTunnelBgpOutputReference <a name="MagicWanGreTunnelBgpOutputReference" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

new magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resetExtraPrefixes">resetExtraPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resetMd5Key">resetMd5Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtraPrefixes` <a name="resetExtraPrefixes" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resetExtraPrefixes"></a>

```typescript
public resetExtraPrefixes(): void
```

##### `resetMd5Key` <a name="resetMd5Key" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.resetMd5Key"></a>

```typescript
public resetMd5Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.extraPrefixesInput">extraPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.md5KeyInput">md5KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.extraPrefixes">extraPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.md5Key">md5Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.customerAsnInput"></a>

```typescript
public readonly customerAsnInput: number;
```

- *Type:* number

---

##### `extraPrefixesInput`<sup>Optional</sup> <a name="extraPrefixesInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.extraPrefixesInput"></a>

```typescript
public readonly extraPrefixesInput: string[];
```

- *Type:* string[]

---

##### `md5KeyInput`<sup>Optional</sup> <a name="md5KeyInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.md5KeyInput"></a>

```typescript
public readonly md5KeyInput: string;
```

- *Type:* string

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `extraPrefixes`<sup>Required</sup> <a name="extraPrefixes" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.extraPrefixes"></a>

```typescript
public readonly extraPrefixes: string[];
```

- *Type:* string[]

---

##### `md5Key`<sup>Required</sup> <a name="md5Key" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.md5Key"></a>

```typescript
public readonly md5Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanGreTunnelBgp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgp">MagicWanGreTunnelBgp</a>

---


### MagicWanGreTunnelBgpStatusOutputReference <a name="MagicWanGreTunnelBgpStatusOutputReference" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

new magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.bgpState">bgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.cfSpeakerIp">cfSpeakerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.cfSpeakerPort">cfSpeakerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.customerSpeakerIp">customerSpeakerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.customerSpeakerPort">customerSpeakerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.tcpEstablished">tcpEstablished</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatus">MagicWanGreTunnelBgpStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.bgpState"></a>

```typescript
public readonly bgpState: string;
```

- *Type:* string

---

##### `cfSpeakerIp`<sup>Required</sup> <a name="cfSpeakerIp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.cfSpeakerIp"></a>

```typescript
public readonly cfSpeakerIp: string;
```

- *Type:* string

---

##### `cfSpeakerPort`<sup>Required</sup> <a name="cfSpeakerPort" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.cfSpeakerPort"></a>

```typescript
public readonly cfSpeakerPort: number;
```

- *Type:* number

---

##### `customerSpeakerIp`<sup>Required</sup> <a name="customerSpeakerIp" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.customerSpeakerIp"></a>

```typescript
public readonly customerSpeakerIp: string;
```

- *Type:* string

---

##### `customerSpeakerPort`<sup>Required</sup> <a name="customerSpeakerPort" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.customerSpeakerPort"></a>

```typescript
public readonly customerSpeakerPort: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tcpEstablished`<sup>Required</sup> <a name="tcpEstablished" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.tcpEstablished"></a>

```typescript
public readonly tcpEstablished: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MagicWanGreTunnelBgpStatus;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelBgpStatus">MagicWanGreTunnelBgpStatus</a>

---


### MagicWanGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelHealthCheckOutputReference" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

new magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate">resetRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget"></a>

```typescript
public putTarget(value: MagicWanGreTunnelHealthCheckTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate"></a>

```typescript
public resetRate(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput">rateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target"></a>

```typescript
public readonly target: MagicWanGreTunnelHealthCheckTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput"></a>

```typescript
public readonly rateInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | MagicWanGreTunnelHealthCheckTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanGreTunnelHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---


### MagicWanGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelHealthCheckTargetOutputReference" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```typescript
import { magicWanGreTunnel } from '@cdktn/provider-cloudflare'

new magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved">resetSaved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSaved` <a name="resetSaved" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```typescript
public resetSaved(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput">savedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```typescript
public readonly effective: string;
```

- *Type:* string

---

##### `savedInput`<sup>Optional</sup> <a name="savedInput" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```typescript
public readonly savedInput: string;
```

- *Type:* string

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```typescript
public readonly saved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicWanGreTunnelHealthCheckTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---



