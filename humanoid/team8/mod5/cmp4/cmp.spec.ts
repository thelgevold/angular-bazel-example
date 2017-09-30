
import { Cmp7854Component } from './cmp';
describe('Cmp7854Component', () => {
  it('should add', () => {
    expect(new Cmp7854Component().add7854(1)).toBe(7855);
  });
});