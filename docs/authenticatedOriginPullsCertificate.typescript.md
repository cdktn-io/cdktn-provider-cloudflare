# `authenticatedOriginPullsCertificate` Submodule <a name="`authenticatedOriginPullsCertificate` Submodule" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsCertificate <a name="AuthenticatedOriginPullsCertificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

new authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate(scope: Construct, id: string, config: AuthenticatedOriginPullsCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticatedOriginPullsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AuthenticatedOriginPullsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticatedOriginPullsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticatedOriginPullsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/authenticated_origin_pulls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPullsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsCertificateConfig <a name="AuthenticatedOriginPullsCertificateConfig" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.Initializer"></a>

```typescript
import { authenticatedOriginPullsCertificate } from '@cdktn/provider-cloudflare'

const authenticatedOriginPullsCertificateConfig: authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | The zone's leaf certificate. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The zone's private key. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The zone's leaf certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/authenticated_origin_pulls_certificate#certificate AuthenticatedOriginPullsCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The zone's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/authenticated_origin_pulls_certificate#private_key AuthenticatedOriginPullsCertificate#private_key}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/authenticated_origin_pulls_certificate#zone_id AuthenticatedOriginPullsCertificate#zone_id}

---



