
import { Cmp5139Component } from './cmp';
describe('Cmp5139Component', () => {
  it('should add', () => {
    expect(new Cmp5139Component().add5139(1)).toBe(5140);
  });
});