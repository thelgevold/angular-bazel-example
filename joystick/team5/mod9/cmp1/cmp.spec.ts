
import { Cmp9591Component } from './cmp';
describe('Cmp9591Component', () => {
  it('should add', () => {
    expect(new Cmp9591Component().add9591(1)).toBe(9592);
  });
});