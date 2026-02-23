# `emailRoutingRule` Submodule <a name="`emailRoutingRule` Submodule" id="@cdktn/provider-cloudflare.emailRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailRoutingRule <a name="EmailRoutingRule" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule cloudflare_email_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

new emailRoutingRule.EmailRoutingRule(scope: Construct, id: string, config: EmailRoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig">EmailRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig">EmailRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putMatchers">putMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putActions"></a>

```typescript
public putActions(value: IResolvable | EmailRoutingRuleActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]

---

##### `putMatchers` <a name="putMatchers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putMatchers"></a>

```typescript
public putMatchers(value: IResolvable | EmailRoutingRuleMatchers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.putMatchers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isConstruct"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

emailRoutingRule.EmailRoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformElement"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

emailRoutingRule.EmailRoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformResource"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

emailRoutingRule.EmailRoutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

emailRoutingRule.EmailRoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmailRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmailRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList">EmailRoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.matchers">matchers</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList">EmailRoutingRuleMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.matchersInput">matchersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.actions"></a>

```typescript
public readonly actions: EmailRoutingRuleActionsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList">EmailRoutingRuleActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchers`<sup>Required</sup> <a name="matchers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.matchers"></a>

```typescript
public readonly matchers: EmailRoutingRuleMatchersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList">EmailRoutingRuleMatchersList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | EmailRoutingRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `matchersInput`<sup>Optional</sup> <a name="matchersInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.matchersInput"></a>

```typescript
public readonly matchersInput: IResolvable | EmailRoutingRuleMatchers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailRoutingRuleActions <a name="EmailRoutingRuleActions" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

const emailRoutingRuleActions: emailRoutingRule.EmailRoutingRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions.property.type">type</a></code> | <code>string</code> | Type of supported action. Available values: "drop", "forward", "worker". |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#value EmailRoutingRule#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of supported action. Available values: "drop", "forward", "worker".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#type EmailRoutingRule#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#value EmailRoutingRule#value}.

---

### EmailRoutingRuleConfig <a name="EmailRoutingRuleConfig" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

const emailRoutingRuleConfig: emailRoutingRule.EmailRoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]</code> | List actions patterns. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.matchers">matchers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]</code> | Matching patterns to forward to your actions. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Routing rule status. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.name">name</a></code> | <code>string</code> | Routing rule name. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.priority">priority</a></code> | <code>number</code> | Priority of the routing rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | EmailRoutingRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]

List actions patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#actions EmailRoutingRule#actions}

---

##### `matchers`<sup>Required</sup> <a name="matchers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.matchers"></a>

```typescript
public readonly matchers: IResolvable | EmailRoutingRuleMatchers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]

Matching patterns to forward to your actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#matchers EmailRoutingRule#matchers}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#zone_id EmailRoutingRule#zone_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Routing rule status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#enabled EmailRoutingRule#enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Routing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#name EmailRoutingRule#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#priority EmailRoutingRule#priority}

---

### EmailRoutingRuleMatchers <a name="EmailRoutingRuleMatchers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

const emailRoutingRuleMatchers: emailRoutingRule.EmailRoutingRuleMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.type">type</a></code> | <code>string</code> | Type of matcher. Available values: "all", "literal". |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.field">field</a></code> | <code>string</code> | Field for type matcher. Available values: "to". |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.value">value</a></code> | <code>string</code> | Value for matcher. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of matcher. Available values: "all", "literal".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#type EmailRoutingRule#type}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Field for type matcher. Available values: "to".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#field EmailRoutingRule#field}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for matcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/email_routing_rule#value EmailRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EmailRoutingRuleActionsList <a name="EmailRoutingRuleActionsList" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

new emailRoutingRule.EmailRoutingRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.get"></a>

```typescript
public get(index: number): EmailRoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailRoutingRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>[]

---


### EmailRoutingRuleActionsOutputReference <a name="EmailRoutingRuleActionsOutputReference" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

new emailRoutingRule.EmailRoutingRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailRoutingRuleActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleActions">EmailRoutingRuleActions</a>

---


### EmailRoutingRuleMatchersList <a name="EmailRoutingRuleMatchersList" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

new emailRoutingRule.EmailRoutingRuleMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.get"></a>

```typescript
public get(index: number): EmailRoutingRuleMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailRoutingRuleMatchers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>[]

---


### EmailRoutingRuleMatchersOutputReference <a name="EmailRoutingRuleMatchersOutputReference" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer"></a>

```typescript
import { emailRoutingRule } from '@cdktn/provider-cloudflare'

new emailRoutingRule.EmailRoutingRuleMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailRoutingRuleMatchers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.emailRoutingRule.EmailRoutingRuleMatchers">EmailRoutingRuleMatchers</a>

---



