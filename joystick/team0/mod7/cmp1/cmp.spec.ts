
import { Cmp9071Component } from './cmp';
describe('Cmp9071Component', () => {
  it('should add', () => {
    expect(new Cmp9071Component().add9071(1)).toBe(9072);
  });
});