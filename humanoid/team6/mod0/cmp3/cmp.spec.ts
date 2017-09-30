
import { Cmp7603Component } from './cmp';
describe('Cmp7603Component', () => {
  it('should add', () => {
    expect(new Cmp7603Component().add7603(1)).toBe(7604);
  });
});