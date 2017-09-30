
import { Cmp8071Component } from './cmp';
describe('Cmp8071Component', () => {
  it('should add', () => {
    expect(new Cmp8071Component().add8071(1)).toBe(8072);
  });
});