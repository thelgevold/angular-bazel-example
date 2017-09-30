
import { Cmp7323Component } from './cmp';
describe('Cmp7323Component', () => {
  it('should add', () => {
    expect(new Cmp7323Component().add7323(1)).toBe(7324);
  });
});