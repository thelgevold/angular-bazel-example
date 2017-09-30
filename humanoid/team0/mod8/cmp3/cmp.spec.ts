
import { Cmp7083Component } from './cmp';
describe('Cmp7083Component', () => {
  it('should add', () => {
    expect(new Cmp7083Component().add7083(1)).toBe(7084);
  });
});