
import { Cmp7561Component } from './cmp';
describe('Cmp7561Component', () => {
  it('should add', () => {
    expect(new Cmp7561Component().add7561(1)).toBe(7562);
  });
});