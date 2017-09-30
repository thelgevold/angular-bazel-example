
import { Cmp4913Component } from './cmp';
describe('Cmp4913Component', () => {
  it('should add', () => {
    expect(new Cmp4913Component().add4913(1)).toBe(4914);
  });
});