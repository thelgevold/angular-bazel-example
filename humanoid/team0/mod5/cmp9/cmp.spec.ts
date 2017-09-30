
import { Cmp7059Component } from './cmp';
describe('Cmp7059Component', () => {
  it('should add', () => {
    expect(new Cmp7059Component().add7059(1)).toBe(7060);
  });
});