
import { Cmp5582Component } from './cmp';
describe('Cmp5582Component', () => {
  it('should add', () => {
    expect(new Cmp5582Component().add5582(1)).toBe(5583);
  });
});