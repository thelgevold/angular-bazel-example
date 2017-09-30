
import { Cmp9220Component } from './cmp';
describe('Cmp9220Component', () => {
  it('should add', () => {
    expect(new Cmp9220Component().add9220(1)).toBe(9221);
  });
});