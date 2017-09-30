
import { Cmp4575Component } from './cmp';
describe('Cmp4575Component', () => {
  it('should add', () => {
    expect(new Cmp4575Component().add4575(1)).toBe(4576);
  });
});