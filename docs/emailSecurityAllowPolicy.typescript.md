# `emailSecurityAllowPolicy` Submodule <a name="`emailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityAllowPolicy <a name="EmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

new emailSecurityAllowPolicy.EmailSecurityAllowPolicy(scope: Construct, id: string, config: EmailSecurityAllowPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments">resetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient">resetIsRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender">resetIsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof">resetIsSpoof</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComments` <a name="resetComments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments"></a>

```typescript
public resetComments(): void
```

##### `resetIsRecipient` <a name="resetIsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient"></a>

```typescript
public resetIsRecipient(): void
```

##### `resetIsSender` <a name="resetIsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender"></a>

```typescript
public resetIsSender(): void
```

##### `resetIsSpoof` <a name="resetIsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof"></a>

```typescript
public resetIsSpoof(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityAllowPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput">commentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput">isAcceptableSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput">isExemptRecipientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput">isRecipientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput">isRegexInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput">isSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput">isSpoofInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput">isTrustedSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput">patternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput">verifySenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient">isRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex">isRegex</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender">isSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof">isSpoof</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput"></a>

```typescript
public readonly commentsInput: string;
```

- *Type:* string

---

##### `isAcceptableSenderInput`<sup>Optional</sup> <a name="isAcceptableSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput"></a>

```typescript
public readonly isAcceptableSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipientInput`<sup>Optional</sup> <a name="isExemptRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput"></a>

```typescript
public readonly isExemptRecipientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRecipientInput`<sup>Optional</sup> <a name="isRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput"></a>

```typescript
public readonly isRecipientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRegexInput`<sup>Optional</sup> <a name="isRegexInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput"></a>

```typescript
public readonly isRegexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSenderInput`<sup>Optional</sup> <a name="isSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput"></a>

```typescript
public readonly isSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSpoofInput`<sup>Optional</sup> <a name="isSpoofInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput"></a>

```typescript
public readonly isSpoofInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSenderInput`<sup>Optional</sup> <a name="isTrustedSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput"></a>

```typescript
public readonly isTrustedSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput"></a>

```typescript
public readonly patternTypeInput: string;
```

- *Type:* string

---

##### `verifySenderInput`<sup>Optional</sup> <a name="verifySenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput"></a>

```typescript
public readonly verifySenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRecipient`<sup>Required</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient"></a>

```typescript
public readonly isRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSender`<sup>Required</sup> <a name="isSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender"></a>

```typescript
public readonly isSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSpoof`<sup>Required</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof"></a>

```typescript
public readonly isSpoof: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityAllowPolicyConfig <a name="EmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.Initializer"></a>

```typescript
import { emailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

const emailSecurityAllowPolicyConfig: emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex">isRegex</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern">pattern</a></code> | <code>string</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType">patternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments">comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient">isRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender">isSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof">isSpoof</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

Type of pattern matching.

EMAIL: matches a full email address (e.g. `user@example.com`)
- DOMAIN: matches a domain name (e.g. `example.com`)
- IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
- UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `isRecipient`<sup>Optional</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient"></a>

```typescript
public readonly isRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `isSender`<sup>Optional</sup> <a name="isSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender"></a>

```typescript
public readonly isSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `isSpoof`<sup>Optional</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof"></a>

```typescript
public readonly isSpoof: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---



