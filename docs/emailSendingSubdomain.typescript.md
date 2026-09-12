# `emailSendingSubdomain` Submodule <a name="`emailSendingSubdomain` Submodule" id="@cdktn/provider-cloudflare.emailSendingSubdomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSendingSubdomain <a name="EmailSendingSubdomain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain cloudflare_email_sending_subdomain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

new emailSendingSubdomain.EmailSendingSubdomain(scope: Construct, id: string, config: EmailSendingSubdomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig">EmailSendingSubdomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig">EmailSendingSubdomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients">resetDropSuppressedRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled">resetPreviewEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDropSuppressedRecipients` <a name="resetDropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients"></a>

```typescript
public resetDropSuppressedRecipients(): void
```

##### `resetPreviewEnabled` <a name="resetPreviewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled"></a>

```typescript
public resetPreviewEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

emailSendingSubdomain.EmailSendingSubdomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSendingSubdomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSendingSubdomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailSendingSubdomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector">dkimSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain">returnPathDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput">dropSuppressedRecipientsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput">previewEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients">dropSuppressedRecipients</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled">previewEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `dkimSelector`<sup>Required</sup> <a name="dkimSelector" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector"></a>

```typescript
public readonly dkimSelector: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `returnPathDomain`<sup>Required</sup> <a name="returnPathDomain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain"></a>

```typescript
public readonly returnPathDomain: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `dropSuppressedRecipientsInput`<sup>Optional</sup> <a name="dropSuppressedRecipientsInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput"></a>

```typescript
public readonly dropSuppressedRecipientsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `previewEnabledInput`<sup>Optional</sup> <a name="previewEnabledInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput"></a>

```typescript
public readonly previewEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `dropSuppressedRecipients`<sup>Required</sup> <a name="dropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients"></a>

```typescript
public readonly dropSuppressedRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `previewEnabled`<sup>Required</sup> <a name="previewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled"></a>

```typescript
public readonly previewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSendingSubdomainConfig <a name="EmailSendingSubdomainConfig" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.Initializer"></a>

```typescript
import { emailSendingSubdomain } from '@cdktn/provider-cloudflare'

const emailSendingSubdomainConfig: emailSendingSubdomain.EmailSendingSubdomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name">name</a></code> | <code>string</code> | The domain name within the zone. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients">dropSuppressedRecipients</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled">previewEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether sent messages from this subdomain can be previewed in the activity log. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The domain name within the zone.

A wildcard is allowed only as the complete leftmost label (`*.example.com`) and requires the account wildcard Email Sending entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#name EmailSendingSubdomain#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#zone_id EmailSendingSubdomain#zone_id}

---

##### `dropSuppressedRecipients`<sup>Optional</sup> <a name="dropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients"></a>

```typescript
public readonly dropSuppressedRecipients: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#drop_suppressed_recipients EmailSendingSubdomain#drop_suppressed_recipients}

---

##### `previewEnabled`<sup>Optional</sup> <a name="previewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled"></a>

```typescript
public readonly previewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether sent messages from this subdomain can be previewed in the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#preview_enabled EmailSendingSubdomain#preview_enabled}

---



