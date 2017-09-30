
import { Cmp1984Component } from './cmp';
describe('Cmp1984Component', () => {
  it('should add', () => {
    expect(new Cmp1984Component().add1984(1)).toBe(1985);
  });
});