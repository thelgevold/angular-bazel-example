
import { Cmp6071Component } from './cmp';
describe('Cmp6071Component', () => {
  it('should add', () => {
    expect(new Cmp6071Component().add6071(1)).toBe(6072);
  });
});