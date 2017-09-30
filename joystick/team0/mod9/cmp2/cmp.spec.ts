
import { Cmp9092Component } from './cmp';
describe('Cmp9092Component', () => {
  it('should add', () => {
    expect(new Cmp9092Component().add9092(1)).toBe(9093);
  });
});