
import { Cmp7675Component } from './cmp';
describe('Cmp7675Component', () => {
  it('should add', () => {
    expect(new Cmp7675Component().add7675(1)).toBe(7676);
  });
});