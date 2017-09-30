
import { Cmp5190Component } from './cmp';
describe('Cmp5190Component', () => {
  it('should add', () => {
    expect(new Cmp5190Component().add5190(1)).toBe(5191);
  });
});