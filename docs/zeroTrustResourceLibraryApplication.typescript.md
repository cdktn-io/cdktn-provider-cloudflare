# `zeroTrustResourceLibraryApplication` Submodule <a name="`zeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustResourceLibraryApplication <a name="ZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

new zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication(scope: Construct, id: string, config: ZeroTrustResourceLibraryApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets">resetIpSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols">resetPortProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains">resetSupportDomains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames"></a>

```typescript
public resetHostnames(): void
```

##### `resetIpSubnets` <a name="resetIpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets"></a>

```typescript
public resetIpSubnets(): void
```

##### `resetPortProtocols` <a name="resetPortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols"></a>

```typescript
public resetPortProtocols(): void
```

##### `resetSupportDomains` <a name="resetSupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains"></a>

```typescript
public resetSupportDomains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">applicationConfidenceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition">applicationScoreComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource">applicationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription">applicationTypeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore">genAiScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported">supported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput">categoryIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput">humanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput">ipSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput">portProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput">supportDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId">categoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId">humanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets">ipSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols">portProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains">supportDomains</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationConfidenceScore`<sup>Required</sup> <a name="applicationConfidenceScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```typescript
public readonly applicationConfidenceScore: number;
```

- *Type:* number

---

##### `applicationScoreComposition`<sup>Required</sup> <a name="applicationScoreComposition" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```typescript
public readonly applicationScoreComposition: string;
```

- *Type:* string

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```typescript
public readonly applicationSource: string;
```

- *Type:* string

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `applicationTypeDescription`<sup>Required</sup> <a name="applicationTypeDescription" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```typescript
public readonly applicationTypeDescription: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `genAiScore`<sup>Required</sup> <a name="genAiScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```typescript
public readonly genAiScore: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `supported`<sup>Required</sup> <a name="supported" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported"></a>

```typescript
public readonly supported: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput"></a>

```typescript
public readonly categoryIdInput: number;
```

- *Type:* number

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `humanIdInput`<sup>Optional</sup> <a name="humanIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput"></a>

```typescript
public readonly humanIdInput: string;
```

- *Type:* string

---

##### `ipSubnetsInput`<sup>Optional</sup> <a name="ipSubnetsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput"></a>

```typescript
public readonly ipSubnetsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portProtocolsInput`<sup>Optional</sup> <a name="portProtocolsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput"></a>

```typescript
public readonly portProtocolsInput: string[];
```

- *Type:* string[]

---

##### `supportDomainsInput`<sup>Optional</sup> <a name="supportDomainsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput"></a>

```typescript
public readonly supportDomainsInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId"></a>

```typescript
public readonly categoryId: number;
```

- *Type:* number

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId"></a>

```typescript
public readonly humanId: string;
```

- *Type:* string

---

##### `ipSubnets`<sup>Required</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```typescript
public readonly ipSubnets: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portProtocols`<sup>Required</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```typescript
public readonly portProtocols: string[];
```

- *Type:* string[]

---

##### `supportDomains`<sup>Required</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```typescript
public readonly supportDomains: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustResourceLibraryApplicationConfig <a name="ZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```typescript
import { zeroTrustResourceLibraryApplication } from '@cdktn/provider-cloudflare'

const zeroTrustResourceLibraryApplicationConfig: zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId">categoryId</a></code> | <code>number</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId">humanId</a></code> | <code>string</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name">name</a></code> | <code>string</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets">ipSubnets</a></code> | <code>string[]</code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols">portProtocols</a></code> | <code>string[]</code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains">supportDomains</a></code> | <code>string[]</code> | Support domains matched by the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId"></a>

```typescript
public readonly categoryId: number;
```

- *Type:* number

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `humanId`<sup>Required</sup> <a name="humanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId"></a>

```typescript
public readonly humanId: string;
```

- *Type:* string

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `ipSubnets`<sup>Optional</sup> <a name="ipSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets"></a>

```typescript
public readonly ipSubnets: string[];
```

- *Type:* string[]

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `portProtocols`<sup>Optional</sup> <a name="portProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols"></a>

```typescript
public readonly portProtocols: string[];
```

- *Type:* string[]

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `supportDomains`<sup>Optional</sup> <a name="supportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains"></a>

```typescript
public readonly supportDomains: string[];
```

- *Type:* string[]

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---



