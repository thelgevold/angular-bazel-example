
import { Cmp4581Component } from './cmp';
describe('Cmp4581Component', () => {
  it('should add', () => {
    expect(new Cmp4581Component().add4581(1)).toBe(4582);
  });
});