
import { Cmp2805Component } from './cmp';
describe('Cmp2805Component', () => {
  it('should add', () => {
    expect(new Cmp2805Component().add2805(1)).toBe(2806);
  });
});