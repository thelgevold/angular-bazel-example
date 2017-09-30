
import { Cmp5023Component } from './cmp';
describe('Cmp5023Component', () => {
  it('should add', () => {
    expect(new Cmp5023Component().add5023(1)).toBe(5024);
  });
});