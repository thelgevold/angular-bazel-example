
import { Cmp7000Component } from './cmp';
describe('Cmp7000Component', () => {
  it('should add', () => {
    expect(new Cmp7000Component().add7000(1)).toBe(7001);
  });
});