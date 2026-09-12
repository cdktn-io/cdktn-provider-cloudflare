# `emailSecurityDomain` Submodule <a name="`emailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.emailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityDomain <a name="EmailSecurityDomain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

new emailSecurityDomain.EmailSecurityDomain(scope: Construct, id: string, config: EmailSecurityDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops">resetLookbackHops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound">resetRequireTlsInbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound">resetRequireTlsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFolder` <a name="resetFolder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```

##### `resetLookbackHops` <a name="resetLookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops"></a>

```typescript
public resetLookbackHops(): void
```

##### `resetRequireTlsInbound` <a name="resetRequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound"></a>

```typescript
public resetRequireTlsInbound(): void
```

##### `resetRequireTlsOutbound` <a name="resetRequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound"></a>

```typescript
public resetRequireTlsOutbound(): void
```

##### `resetTransport` <a name="resetTransport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport"></a>

```typescript
public resetTransport(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

emailSecurityDomain.EmailSecurityDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

emailSecurityDomain.EmailSecurityDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

emailSecurityDomain.EmailSecurityDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

emailSecurityDomain.EmailSecurityDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus">dmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider">inboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId">o365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus">spfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput">allowedDeliveryModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput">dropDispositionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput">ipRestrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput">lookbackHopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput">requireTlsInboundInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput">requireTlsOutboundInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput">transportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions">dropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions">ipRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops">lookbackHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound">requireTlsInbound</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport">transport</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization"></a>

```typescript
public readonly authorization: EmailSecurityDomainAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus"></a>

```typescript
public readonly dmarcStatus: string;
```

- *Type:* string

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed"></a>

```typescript
public readonly emailsProcessed: EmailSecurityDomainEmailsProcessedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider"></a>

```typescript
public readonly inboxProvider: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId"></a>

```typescript
public readonly o365TenantId: string;
```

- *Type:* string

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus"></a>

```typescript
public readonly spfStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedDeliveryModesInput`<sup>Optional</sup> <a name="allowedDeliveryModesInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput"></a>

```typescript
public readonly allowedDeliveryModesInput: string[];
```

- *Type:* string[]

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `dropDispositionsInput`<sup>Optional</sup> <a name="dropDispositionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput"></a>

```typescript
public readonly dropDispositionsInput: string[];
```

- *Type:* string[]

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `ipRestrictionsInput`<sup>Optional</sup> <a name="ipRestrictionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput"></a>

```typescript
public readonly ipRestrictionsInput: string[];
```

- *Type:* string[]

---

##### `lookbackHopsInput`<sup>Optional</sup> <a name="lookbackHopsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput"></a>

```typescript
public readonly lookbackHopsInput: number;
```

- *Type:* number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requireTlsInboundInput`<sup>Optional</sup> <a name="requireTlsInboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput"></a>

```typescript
public readonly requireTlsInboundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requireTlsOutboundInput`<sup>Optional</sup> <a name="requireTlsOutboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput"></a>

```typescript
public readonly requireTlsOutboundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput"></a>

```typescript
public readonly transportInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes"></a>

```typescript
public readonly allowedDeliveryModes: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions"></a>

```typescript
public readonly dropDispositions: string[];
```

- *Type:* string[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions"></a>

```typescript
public readonly ipRestrictions: string[];
```

- *Type:* string[]

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops"></a>

```typescript
public readonly lookbackHops: number;
```

- *Type:* number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound"></a>

```typescript
public readonly requireTlsInbound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound"></a>

```typescript
public readonly requireTlsOutbound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityDomainAuthorization <a name="EmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

const emailSecurityDomainAuthorization: emailSecurityDomain.EmailSecurityDomainAuthorization = { ... }
```


### EmailSecurityDomainConfig <a name="EmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

const emailSecurityDomainConfig: emailSecurityDomain.EmailSecurityDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions">dropDispositions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions">ipRestrictions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder">folder</a></code> | <code>string</code> | Available values: "AllItems", "Inbox". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops">lookbackHops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound">requireTlsInbound</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport">transport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes"></a>

```typescript
public readonly allowedDeliveryModes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}.

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions"></a>

```typescript
public readonly dropDispositions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}.

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions"></a>

```typescript
public readonly ipRestrictions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Available values: "AllItems", "Inbox".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}.

---

##### `lookbackHops`<sup>Optional</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops"></a>

```typescript
public readonly lookbackHops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}.

---

##### `requireTlsInbound`<sup>Optional</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound"></a>

```typescript
public readonly requireTlsInbound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}.

---

##### `requireTlsOutbound`<sup>Optional</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound"></a>

```typescript
public readonly requireTlsOutbound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}.

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}.

---

### EmailSecurityDomainEmailsProcessed <a name="EmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

const emailSecurityDomainEmailsProcessed: emailSecurityDomain.EmailSecurityDomainEmailsProcessed = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityDomainAuthorizationOutputReference <a name="EmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

new emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```typescript
public readonly authorized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailSecurityDomainAuthorization;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a>

---


### EmailSecurityDomainEmailsProcessedOutputReference <a name="EmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```typescript
import { emailSecurityDomain } from '@cdktn/provider-cloudflare'

new emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```typescript
public readonly totalEmailsProcessed: number;
```

- *Type:* number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```typescript
public readonly totalEmailsProcessedPrevious: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmailSecurityDomainEmailsProcessed;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a>

---



