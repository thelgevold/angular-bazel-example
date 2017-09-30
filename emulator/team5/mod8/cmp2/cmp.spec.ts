
import { Cmp4582Component } from './cmp';
describe('Cmp4582Component', () => {
  it('should add', () => {
    expect(new Cmp4582Component().add4582(1)).toBe(4583);
  });
});