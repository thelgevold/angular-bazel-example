
import { Cmp7552Component } from './cmp';
describe('Cmp7552Component', () => {
  it('should add', () => {
    expect(new Cmp7552Component().add7552(1)).toBe(7553);
  });
});