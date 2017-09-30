
import { Cmp7387Component } from './cmp';
describe('Cmp7387Component', () => {
  it('should add', () => {
    expect(new Cmp7387Component().add7387(1)).toBe(7388);
  });
});