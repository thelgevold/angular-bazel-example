
import { Cmp9908Component } from './cmp';
describe('Cmp9908Component', () => {
  it('should add', () => {
    expect(new Cmp9908Component().add9908(1)).toBe(9909);
  });
});