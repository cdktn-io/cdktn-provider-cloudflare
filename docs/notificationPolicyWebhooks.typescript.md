# `notificationPolicyWebhooks` Submodule <a name="`notificationPolicyWebhooks` Submodule" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicyWebhooks <a name="NotificationPolicyWebhooks" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

new notificationPolicyWebhooks.NotificationPolicyWebhooks(scope: Construct, id: string, config: NotificationPolicyWebhooksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig">NotificationPolicyWebhooksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig">NotificationPolicyWebhooksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetSecret"></a>

```typescript
public resetSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationPolicyWebhooks resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NotificationPolicyWebhooks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationPolicyWebhooks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationPolicyWebhooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NotificationPolicyWebhooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastFailure">lastFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastSuccess">lastSuccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastFailure`<sup>Required</sup> <a name="lastFailure" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastFailure"></a>

```typescript
public readonly lastFailure: string;
```

- *Type:* string

---

##### `lastSuccess`<sup>Required</sup> <a name="lastSuccess" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastSuccess"></a>

```typescript
public readonly lastSuccess: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyWebhooksConfig <a name="NotificationPolicyWebhooksConfig" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.Initializer"></a>

```typescript
import { notificationPolicyWebhooks } from '@cdktn/provider-cloudflare'

const notificationPolicyWebhooksConfig: notificationPolicyWebhooks.NotificationPolicyWebhooksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.accountId">accountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.name">name</a></code> | <code>string</code> | The name of the webhook destination. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.url">url</a></code> | <code>string</code> | The POST endpoint to call when dispatching a notification. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.secret">secret</a></code> | <code>string</code> | Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks#account_id NotificationPolicyWebhooks#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the webhook destination.

This will be included in the request body when you receive a webhook notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks#name NotificationPolicyWebhooks#name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The POST endpoint to call when dispatching a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks#url NotificationPolicyWebhooks#url}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations.

Secrets are not returned in any API response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/notification_policy_webhooks#secret NotificationPolicyWebhooks#secret}

---



