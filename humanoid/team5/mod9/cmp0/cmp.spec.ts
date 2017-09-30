
import { Cmp7590Component } from './cmp';
describe('Cmp7590Component', () => {
  it('should add', () => {
    expect(new Cmp7590Component().add7590(1)).toBe(7591);
  });
});