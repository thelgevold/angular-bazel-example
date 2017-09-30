
import { Cmp4700Component } from './cmp';
describe('Cmp4700Component', () => {
  it('should add', () => {
    expect(new Cmp4700Component().add4700(1)).toBe(4701);
  });
});