
import { Cmp9163Component } from './cmp';
describe('Cmp9163Component', () => {
  it('should add', () => {
    expect(new Cmp9163Component().add9163(1)).toBe(9164);
  });
});