
import { Cmp7510Component } from './cmp';
describe('Cmp7510Component', () => {
  it('should add', () => {
    expect(new Cmp7510Component().add7510(1)).toBe(7511);
  });
});