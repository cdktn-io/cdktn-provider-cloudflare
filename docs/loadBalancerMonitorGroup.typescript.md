# `loadBalancerMonitorGroup` Submodule <a name="`loadBalancerMonitorGroup` Submodule" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitorGroup <a name="LoadBalancerMonitorGroup" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new loadBalancerMonitorGroup.LoadBalancerMonitorGroup(scope: Construct, id: string, config: LoadBalancerMonitorGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig">LoadBalancerMonitorGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig">LoadBalancerMonitorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers">putMembers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMembers` <a name="putMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers"></a>

```typescript
public putMembers(value: IResolvable | LoadBalancerMonitorGroupMembers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerMonitorGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerMonitorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput">membersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members"></a>

```typescript
public readonly members: LoadBalancerMonitorGroupMembersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput"></a>

```typescript
public readonly membersInput: IResolvable | LoadBalancerMonitorGroupMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorGroupConfig <a name="LoadBalancerMonitorGroupConfig" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.Initializer"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

const loadBalancerMonitorGroupConfig: loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description">description</a></code> | <code>string</code> | A short description of the monitor group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members">members</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | List of monitors in this group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#account_id LoadBalancerMonitorGroup#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the monitor group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#description LoadBalancerMonitorGroup#description}

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members"></a>

```typescript
public readonly members: IResolvable | LoadBalancerMonitorGroupMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

List of monitors in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#members LoadBalancerMonitorGroup#members}

---

### LoadBalancerMonitorGroupMembers <a name="LoadBalancerMonitorGroupMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.Initializer"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

const loadBalancerMonitorGroupMembers: loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this monitor is enabled in the group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId">monitorId</a></code> | <code>string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly">monitoringOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this monitor is used for monitoring only (does not affect pool health). |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy">mustBeHealthy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this monitor must be healthy for the pool to be considered healthy. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this monitor is enabled in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#enabled LoadBalancerMonitorGroup#enabled}

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitor_id LoadBalancerMonitorGroup#monitor_id}

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly"></a>

```typescript
public readonly monitoringOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this monitor is used for monitoring only (does not affect pool health).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitoring_only LoadBalancerMonitorGroup#monitoring_only}

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy"></a>

```typescript
public readonly mustBeHealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this monitor must be healthy for the pool to be considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#must_be_healthy LoadBalancerMonitorGroup#must_be_healthy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerMonitorGroupMembersList <a name="LoadBalancerMonitorGroupMembersList" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get"></a>

```typescript
public get(index: number): LoadBalancerMonitorGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerMonitorGroupMembers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---


### LoadBalancerMonitorGroupMembersOutputReference <a name="LoadBalancerMonitorGroupMembersOutputReference" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer"></a>

```typescript
import { loadBalancerMonitorGroup } from '@cdktn/provider-cloudflare'

new loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput">monitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput">monitoringOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput">mustBeHealthyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* string

---

##### `monitoringOnlyInput`<sup>Optional</sup> <a name="monitoringOnlyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput"></a>

```typescript
public readonly monitoringOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mustBeHealthyInput`<sup>Optional</sup> <a name="mustBeHealthyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput"></a>

```typescript
public readonly mustBeHealthyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly"></a>

```typescript
public readonly monitoringOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy"></a>

```typescript
public readonly mustBeHealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerMonitorGroupMembers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>

---



